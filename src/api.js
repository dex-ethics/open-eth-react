/* global fetch */
import 'isomorphic-fetch';
import { normalize, schema } from 'normalizr';
import { request, success, failure } from './reducers/network';
import { update } from './reducers/entities';

// Schema for normalizr
const schemaCase = new schema.Entity('cases');
const schemaCases = new schema.Array(schemaCase);
const schemaDilemma = new schema.Entity('dilemmas', {
  cases: schemaCases,
});
const schemaDilemmas = new schema.Array(schemaDilemma);

// API endpoint
const apiEndpoint = 'https://openeth.com/api/';

const dilemmasShallow = 'id,name,description,features,cases{id}';
const isDilemmaShallow = dilemma => dilemma && dilemma.id && dilemma.name;
const isDilemmaDeep = dilemma => isDilemmaShallow(dilemma) && dilemma.author;

const casesShallow = 'id,dilemma,name,description,action';
const isCaseShallow = case_ => case_ && case_.id && case_.name;
const isCaseDeep = case_ => isCaseShallow(case_) && case_.features;

const fetchApi = async (dispatch, query, resultSchema) => {
  try {
    const url = `${apiEndpoint}${query}`;
    dispatch(request(url));
    const response = await fetch(url);
    const json = await response.json();
    const normalizedData = normalize(json, resultSchema);
    dispatch(success(Date.now()));
    dispatch(update(normalizedData.entities));
  } catch (error) {
    dispatch(failure(error, Date.now()));
    throw error;
  }
};

const toList = ids => (Array.isArray(ids) ? ids.join(',') : ids);

const filter = ids => `id=in.${toList(ids)}`;

export const fetchDilemmaIds = () => (dispatch) => {
  const query = 'dilemmas?select=id';
  return fetchApi(dispatch, query, schemaDilemmas);
};

export const fetchDilemmasShallow = ids => (dispatch, getState) => {
  // Fetch only new
  const state = getState();
  const newIds = ids.filter(id => !isDilemmaShallow(state.entities.dilemmas[id]));
  if (newIds.length === 0) return Promise.resolve();

  // Fetch new ids
  const query = `dilemmas?select=${dilemmasShallow}&${filter(newIds)}`;
  return fetchApi(dispatch, query, schemaDilemmas);
};

export const fetchDilemmas = ids => (dispatch, getState) => {
  // Fetch only new
  const state = getState();
  const newIds = ids.filter(id => !isDilemmaDeep(state.entities.dilemmas[id]));
  if (newIds.length === 0) return Promise.resolve();

  // Fetch new ids
  const query = `dilemmas?select=*,cases{id}&${filter(newIds)}`;
  return fetchApi(dispatch, query, schemaDilemmas);
};

export const fetchCasesShalow = ids => (dispatch, getState) => {
  // Fetch only new
  const state = getState();
  const newIds = ids.filter(id => !isCaseShallow(state.entities.cases[id]));
  if (newIds.length === 0) return Promise.resolve();

  // Fetch new ids
  const query = `cases?select=${casesShallow}&${filter(newIds)}`;
  return fetchApi(dispatch, query, schemaCases);
};

export const fetchCases = ids => (dispatch, getState) => {
  // Fetch only new
  const state = getState();
  const newIds = ids.filter(id => !isCaseDeep(state.entities.cases[id]));
  if (newIds.length === 0) return Promise.resolve();

  // Fetch new ids
  const query = `cases?select=*&${filter(newIds)}`;
  return fetchApi(dispatch, query, schemaCases);
};

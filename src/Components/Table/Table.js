import React, { useReducer, useEffect, useMemo } from "react";
import useFetch from "use-http";
import { Table, Alert } from "antd";

import update from "immutability-helper";

import { columns, BASE_URL } from "./constants";

import "./style.scss";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const types = {
  GET_DATA: "GET_DATA",
  GET_DATA_SUCCESS: "GET_DATA_SUCCESS",
  GET_DATA_FAILURE: "GET_DATA_FAILURE",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.GET_DATA: {
      return update(state, {
        loading: {
          $set: true,
        },
        error: {
          $set: null,
        },
      });
    }

    case types.GET_DATA_SUCCESS: {
      return update(state, {
        data: {
          $set: payload,
        },
        loading: {
          $set: false,
        },
      });
    }

    case types.GET_DATA_FAILURE: {
      return update(state, {
        error: {
          $set: payload,
        },
        loading: {
          $set: false,
        },
      });
    }

    default:
      throw new Error(`Unknown type of action ${type}`);
  }
};

const TableData = () => {
  const actions = useMemo(
    () => ({
      getData: () => ({ type: types.GET_DATA }),
      getDataSuccess: (data) => ({
        type: types.GET_DATA_SUCCESS,
        payload: data,
      }),
      getDataFailure: (error) => ({
        type: types.GET_DATA_FAILURE,
        payload: error,
      }),
    }),
    []
  );
  const [state, dispatch] = useReducer(reducer, initialState);
  const { get, response, error } = useFetch(BASE_URL);

  useEffect(() => {
    loadInitialTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadInitialTodos() {
    try {
      dispatch(actions.getData());
      const result = await get("/result");
      if (response.ok) dispatch(actions.getDataSuccess(result));
    } catch (e) {
      dispatch(actions.getDataFailure(e));
    }
  }

  const { data, loading } = state;

  return (
    <>
      <div className="table">
        <div className="table__content">
          <Table
            dataSource={data}
            columns={columns}
            loading={loading}
            rowKey={(row) => row.id}
          />
        </div>
      </div>
      {error && <Alert message={error.toString()} type="error" />}
    </>
  );
};

export default TableData;

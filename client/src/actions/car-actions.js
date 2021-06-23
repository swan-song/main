import { GET_CARS, SELECT_CAR } from "../action-types/car-action-types";
import { supabase } from "../supabaseClient";


export const getCars = async (dispatch) => {
  const { data, error } = await supabase
    .from('products')
    .select()
  dispatch({
    type: GET_CARS,
    payload: data,
  });
};

export const selectCar = async (dispatch, car) => {
  return dispatch({
    type: SELECT_CAR,
    payload: car,
  });
};

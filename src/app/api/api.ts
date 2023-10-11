import axios from "axios";

const REACT_APP_SERVER_URL = "http://localhost:3001";

const getConfig = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const get = async <T>(path: string): Promise<T> => {
  const serverUrl = REACT_APP_SERVER_URL;
  const config = getConfig();

  const { data } = await axios.get<T>(`${serverUrl}/${path}`, config);
  return data;
};

export const post = async <T, B>(
  path: string,
  body: Partial<B>
): Promise<T | string> => {
  const serverUrl = REACT_APP_SERVER_URL;
  const config = getConfig();

  const { data } = await axios.post<T>(`${serverUrl}/${path}`, body, config);
  return data;
};

export const patch = async <T, B>(
  path: string,
  body: Partial<B>
): Promise<T | string> => {
  const serverUrl = REACT_APP_SERVER_URL;
  const config = getConfig();

  const { data } = await axios.post<T>(`${serverUrl}/${path}`, body, config);
  return data;
};

export const put = async <T, B>(
  path: string,
  body: Partial<B>
): Promise<T | string> => {
  const serverUrl = REACT_APP_SERVER_URL;
  const config = getConfig();

  const { data } = await axios.put<T>(`${serverUrl}/${path}`, body, config);
  return data;
};

export const del = async <T>(path: string): Promise<T | string> => {
  const serverUrl = REACT_APP_SERVER_URL;
  const config = getConfig();

  const { data } = await axios.delete<T>(`${serverUrl}/${path}`, config);
  return data;
};

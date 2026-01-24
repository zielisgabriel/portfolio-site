"use server";

type FecthClientProps = {
  path: string,
  init?: RequestInit,
  host?: string
}

export async function fetchClient({ path, init, host }: FecthClientProps) {
  const API_URL = process.env.API_URL ?? null;

  path = host ? host + path : API_URL + path;

  return fetch(path, init);
}
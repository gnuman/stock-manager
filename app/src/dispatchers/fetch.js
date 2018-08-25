/**
   http fetch api low level functions.
   for the common cases.
   Wraps api call so we have a single place where backend_uri is used.
   also logs the api calls so if we for some reason don't connect we see what 
   we're connecting too.
 */

const jsonHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};
const standardRequestContinuation = response => {
  /**
     Fetch api doesn't do this by default, they always claim success
     we just assume user wants to resolve ok and otherwise reject,
     if not they can use the fetch api themselves.
  */
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
};
export const post = (route, body, extra = {}) => {
  const uri = `${BACKEND_URI}/${route}`;
  console.log("post", uri); // eslint-disable-line no-console
  return fetch(uri, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(body),
    ...extra
  }).then(standardRequestContinuation);
};

export const get = (route, extra = {}) => {
  const uri = `${BACKEND_URI}/${route}`;
  console.log("get", uri); // eslint-disable-line no-console
  return fetch(uri, {
    method: "GET",
    headers: jsonHeaders,
    ...extra
  }).then(standardRequestContinuation);
};

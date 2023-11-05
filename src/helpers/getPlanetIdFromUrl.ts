const getPlanetIdFromUrl = (url: string) =>
  url.slice(url.slice(0, -1).lastIndexOf('/') + 1, -1);

export default getPlanetIdFromUrl;

function validator(kwargs) {
  let requirements = {
    methods: ["GET", "POST", "DELETE", "CONNECT"],
    uri: /[A-Za-z0-9\.]+|\*/g,
    version: ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"],
    message: /[\\<>&'\"]+/g,
  };
  if (Object.keys(kwargs).includes("method")) {
    if (!requirements.methods.includes(kwargs.method))
      throw Error("Invalid request header: Invalid Method");
  } else {
    throw Error("Invalid request header: Invalid Method");
  }
  if (Object.keys(kwargs).includes("uri")) {
    let matchedUri = kwargs.uri.match(requirements.uri);

    if (matchedUri != kwargs.uri) {
      console.log(kwargs.uri);
      console.log(kwargs.uri.match(requirements.uri));

      throw Error("Invalid request header: Invalid URI");
    }
  } else {
    throw Error("Invalid request header: Invalid URI");
  }
  if (Object.keys(kwargs).includes("version")) {
    if (!requirements.version.includes(kwargs.version))
      throw Error("Invalid request header: Invalid Version");
  } else {
    throw Error("Invalid request header: Invalid Version");
  }
  if (Object.keys(kwargs).includes("message")) {
    let matchedMessage = kwargs.message.match(requirements.message);
    if (kwargs.message.includes(matchedMessage))
      throw Error("Invalid request header: Invalid Message");
  } else {
    throw Error("Invalid request header: Invalid Message");
  }
  return kwargs;
}
validator({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "453",
});
validator({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "",
});

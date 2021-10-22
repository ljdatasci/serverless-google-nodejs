"use strict";

exports.http = (request, response) => {
  response.status(200).send("Hello World!");
};

exports.helloPubSub = (message, context) => {
  const name = message.data ? Buffer.from(message.data) : "World";

  console.log(`Hello, ${name}`);
};

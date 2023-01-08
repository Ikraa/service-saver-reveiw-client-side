import React from "react";
import Menubar from "../../components/Menubar";

const Blog = () => {
  return (
    <div>
      <Menubar />
      <h1 className="text-2xl underline text-center mt-5">
        <b>Question & Answer</b>
      </h1>
      <div className="shadow-xl mx-40 card-body">
        <div className="mt-2 mb-2 ml-4">
          <h1>
            <span className="text-xl mb-3">
              <b>1.Question:</b>
            </span>
            Difference between SQL and NoSQL.
          </h1>
          <h1>
            <span className="text-bold text-xl mb-1">
              <b>Ans:</b>
            </span>
            <ul class="list-disc">
              <li>
                <b>S</b>QL is the programming language used to interface with
                relational databases. NoSQL is a class of DBMs that are
                non-relational and generally do not use SQL.
              </li>
              <li>
                SQL is the Vertically Scalable. And NonSQL is the Horizontally
                scalable.
              </li>
              <li>
                SQL example are: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc.
                <br />
                But NonSQL example are: MongoDB, GraphQL, HBase, Neo4j,
                Cassandra, etc.
              </li>
            </ul>
          </h1>
        </div>
      </div>
      <div className="shadow-xl mx-40 mt-3 card-body">
        <h1>
          <span className="text-xl text-bold">
            <b>2.Question:</b>
          </span>
          What is JWT, and how does it work?
        </h1>
        <h1>
          <span className="text-bold text-xl">
            <b>Ans:</b>
          </span>
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. In details JWTs are signed so they
          can't be modified in transit. When an authorization server issues a
          token, it signs it using a key. When the client receives the ID token,
          the client validates the signature using a key as well.
        </h1>
      </div>
      <div className="shadow-xl mx-40 mt-3 card-body">
        <h1>
          <span className="text-xl text-bold">
            <b>3.Question:</b>
          </span>
          What is the difference between javascript and NodeJS?
        </h1>
        <h1>
          <span className="text-bold text-xl">
            <b>Ans:</b>
          </span>
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </h1>
      </div>
      <div className="shadow-xl mx-40 mt-3 card-body mb-8">
        <h1>
          <span className="text-xl text-bold">
            <b>4.Question:</b>
          </span>
          What is the difference between javascript and NodeJS?
        </h1>
        <h1>
          <span className="text-bold text-xl">
            <b>Ans:</b>
          </span>
          Multiple clients make multiple requests to the NodeJS server. NodeJS
          receives these requests and places them into the EventQueue . NodeJS
          server has an internal component referred to as the EventLoop which is
          an infinite loop that receives requests and processes them. This
          EventLoop is single threaded.
        </h1>
      </div>
    </div>
  );
};

export default Blog;

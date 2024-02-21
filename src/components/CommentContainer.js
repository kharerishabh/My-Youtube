import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: "Akshay Saini",
    text: "nice something",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "nice something",
    replies: [
      {
        name: "Rishabh Khare",
        text: "thanks for complement",
        replies: [],
      },
      {
        name: "Rishabh Khare",
        text: "thanks for complement",
        replies: [
          {
            name: "sakshi",
            text: "nice picture",
            replies: [
              {
                name: "ashutosh",
                text: "thaks alot",
                replies: [
                  {
                    name: "ashutosh",
                    text: "thaks alot",
                    replies: [],
                  },
                  {
                    name: "ashutosh",
                    text: "thaks alot",
                    replies: [],
                  },
                  {
                    name: "ashutosh",
                    text: "thaks alot",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Rishabh Khare",
        text: "thanks for complement",
        replies: [],
      },
      {
        name: "Rishabh Khare",
        text: "thanks for complement",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "nice something",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "nice something",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "nice something",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
    <Comment data={comment} />
    <div className="pl-5 border border-l-black ml-5">
    <CommentsList comments={comment.replies}/> 
    </div>
    </div>
  ));
};
const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentContainer;

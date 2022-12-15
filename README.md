# HAI React test

## Running the project

This project was created using create-react-app. It uses `json-server` to mock an api. To start the application run the following commands

```
npm run db
npm run start
```

## Instructions

Given the following endpoints

- `GET /questions` -> returns a list of questions i.e.

```
[
    {
      "id": "q1",
      "text": "Question 1 text",
      "options": [
        {
          "id": "q1:a1",
          "text": "question 1 option 1"
        },
        {
          "id": "q1:a2",
          "text": "question 1 option 2"
        }
      ],
      "visibilityCriteria": [],
      "required": true,
      "type": "radio",
      "section": {
        "id": "section-1",
        "text": "Section 1"
      }
    },
    {
      "id": "q2",
      "text": "Question 2 text",
      ...
]
```

- `GET /answers` -> returns a map of answers for the questions i.e.

```
{
  "q1": ["q1:a2"],
  "q2": ["q2:a3", "q2:a2"],
  ...
}
```

- `POST /answers` -> Updates the questions

1. Render a form which displays a control for each component. The form should be dynamic such that if the response from the questions’ endpoint changes, the form should update. Prepend the question text with “\*” for required questions.
2. Bind the value of the form controls to the answers returned from the answers endpoint. When a the form is modified a request to the `POST /answers` should be made to update the answers.
3. Show/hide questions based on the visibility criteria. A question should be shown if any of the answers in the visibility criteria have values.
4. A question with visibility criteria should only be visible if all the questions in its visibility criteria are visible, e.g. q7 should not be visible if q6 is not visible.
5. Write some unit tests to test the logic of computing the visibility of a question

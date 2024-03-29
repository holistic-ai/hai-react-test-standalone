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

1. Render the questions returned from the `/questions` endpoint. For each question display the question text and its options i.e.

**Question 1 text**  
o question 1 option 1  
o question 1 option 2

**Question 2 text**  
etc...

Ensure that clicking on an options label also selects the corresponding checkbox or radio button. Ensure that only a single radio button can be selected for a given question.

2. Bind the value of the question options to the answers returned from the `/answers` endpoint. e.g.

- for question 1: option 1 should be selected
- for question 2: options 2 and 3 should be selected
- for question 3: option 3 should be selected
  etc

3. Handle updating the answers when an option is selected. When a checkbox or radio is selected a call should be made to `/POST answers` to update the answers.

## Bonus questions

4. Show/hide questions based on the visibility criteria. A question should be shown if any of the answers in the visibility criteria have values.
5. A question with visibility criteria should only be visible if all the questions in its visibility criteria are visible, e.g. q7 should not be visible if q6 is not visible.
6. Write some unit tests to test the logic of computing the visibility of a question

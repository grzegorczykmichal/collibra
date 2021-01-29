# Collibra Frontend Challenge


### Prerequisites
1.  Ensure you have ```node``` installed

2.  Instal netlify development environment by runngin the following command
  ```bash
  npm install netlify-cli -g
  ```
  
### Setup
1. Clone this repository.
  ```bash 
  git clone git@github.com:grzegorczykmichal/collibra.git
  ```

2. Go to ```/app``` directory and run:
  ```bash
  npm i
  ```

3. Create ```.env``` file within ```/app``` directory, providing the following (or use file ```.env.default``` as a tempalte):
  ```text
  REACT_APP_DRIBBLE_AUTHORIZE_URL=https://dribbble.com/oauth/authorize
  REACT_APP_DRIBBLE_CLIENT_ID=[/** your_client_app_id **/]
  REACT_APP_DRIBBLE_STATE=dribble_state
  REACT_APP_DRIBBLE_SCOPES=public+upload
  REACT_APP_DRIBBLE_API_URL=https://api.dribbble.com/v2/
  REACT_APP_RIJKS_API_URL=https://www.rijksmuseum.nl/api/en
  REACT_APP_RIJKS_API_KEY=[/** your_rijksmuseum_api_key **/]
  DRIBBLE_TOKEN_URL=https://dribbble.com/oauth/token
  DRIBBLE_SECRET_ID=[/** your_secret_app_id same **/]
  DRIBBLE_CLIENT_ID=[/** your_client_app_id same as REACT_APP_DRIBBLE_CLIENT_ID **/]
  ```

3. Run the following being in ```/app```:
  ```bash
  netlify dev
  ```

### Next steps

Please naviate to ```/rijk``` page to see the sollution. It uses the API from [RIJKSMUSEUM](https://www.rijksmuseum.nl/en/research/conduct-research/data).

The ```/dribble``` page include unfinished solution for Dribbble api, as it does not comply with the requirements.

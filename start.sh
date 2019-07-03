mongod -dbpath backend/mongoDB/ &
cd backend
yarn dev &
cd ..
cd frontend
yarn start 

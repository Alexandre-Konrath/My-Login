npm init -y
yarn add express pg pg-hstore sequelize
yarn add nodemon sequelize-cli -D

yarn sequelize db:migrate
yarn sequelize db:migrate:undo
yarn sequelize db:migrate:undo:all
yarn sequelize db:create // criar o banco de dados quando tudo ja configurado
yarn sequelize db:create --name=create-

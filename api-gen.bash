curl -X GET "http://localhost:8080/v3/api-docs" -H "accept: application/json" >./schema/api.json
ng-openapi-gen --input schema/api.json  --output src/app/api

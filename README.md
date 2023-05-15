
ENDPOINTS :
-----------------------------------------------------------------------------------------------

AUTH

| HTTP Method | URL Path  | Description      | JSON |
|-------------|-----------|------------------|------|
| GET         | /signUp   | registrate       |      |
| POST        | `/signUp`   | registrate       |      |
| GET         | /logIn    | iniciar sesion   |      |
| POST        | /logIn    | iniciar sesion   |      |
| POST        | /logOut   | cerrar sesion    |      |





TRIP

| HTTP Method | URL Path        | Description      | JSON |
|-------------|-----------------|------------------|------|
| GET         | /               | buscar viaje     |      |
| GET         | /listTrip       | ver viajes       |      |
| GET         | /createTrip     | crear viaje      |      |
| POST        | /createTrip     | crear viaje      |      |
| GET         | /edit/{id}      | editar viaje     |      |
| POST        | /edit/{id}      | editar viaje     |      |
| POST        | /delete/{id}    | eliminar viaje   |      |





MY PROFILE

| HTTP Method | URL Path                | Description        | JSON |
|-------------|-------------------------|--------------------|------|
| GET         | /myProfile/:id         | ver perfil         |      |
| GET         | /myProfile/{id}/edit    | editar mi perfil   |      |
| POST        | /myProfile/{id}/edit    | editar mi perfil   |      |




PROFILES

| HTTP Method | URL Path                   | Description                          | JSON |
|-------------|----------------------------|--------------------------------------|------|
| GET         | /profile/{id}/details      | ver detalles de perfil de otro user  |      |   
| POST        | /profile/{id}/delete       | eliminar perfil (solo admin)         |      |




REVIEWS 

| HTTP Method | URL Path           | Description                     | JSON |
|-------------|--------------------|---------------------------------|------|
| GET         | /reviews/{id}      | ver reviews de alguien          |      |
| GET         | /createReview      | crear review                    |      |
| POST        | /createReview      | crear review                    |      |
| GET         | /updateReview      | editar review (solo admin)      |      |
| POST        | /updateReview      | editar review (solo admin)      |      |
| POST        | /deleteReview      | eliminar review (solo admin)    |      |


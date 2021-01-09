### Epic Weather

Aplikacja została napisana w React.js. Umożliwia sprawdzenie pogody dla pre definiowanych miast bez konieczności przeładowania strony. Wykorzystuje zewnętrzne API — pobiera dane i wyświetla je na stornie. 

Istnieje opcja zalogowania się do aplikacji poprzez konto Google. Logowanie obsługiwane jest przez Firebase. Po zalogowaniu się pojawia się opcja wyboru dostawcy usługi API. 

W zależności od pory dnia (wschód/zachód) we wskazanym mieście zmienia się tło oraz obrazek. 

Aby dodać kolejne, obsługiwane API należy dodać obiekt do tablicy `providers` w pliku `src\config\providers.js`. Należy podać funkcję `fetchWeather(city)`, która jako parametr przyjmie miasto (String). Funkcja musi zwracać tablicę, która posiada odpowiednio: 
* `forecast[0]` = miasto (String);
* `forecast[1]` = temperaturę (Number);
* `forecast[2]` = opis (String);
* `forecast[3]` = porę dnia jako `'day'` lub `'night'` (String);

##### Wykorzystano: 
- React.js
- CSS modules
- Firebase
- npm
- Netlify
- Heroku

##### Kod źródłowy i demo
- code: https://github.com/karolskolasinski/epic-weather
- live: https://epic-weather-demo.netlify.app/
- live-backup: https://epic-weather-demo.herokuapp.com/


<hr>


### Zadanie

Korzystając z publicznie dostępnych usług sieciowych, stwórz aplikację, która będzie pobierała i wyświetlała w dowolnym miejscu strony informację na temat pogody w wybranym przez użytkownika mieście.

#### Aplikacja powinna umożliwiać:
- Sprawdzenie przez każdego użytkownika stanu aktualnej pogody w wybranym z przedefiniowanej listy mieście. W wypadku braku połączenia z zewnętrznymi usługami, wyświetlony powinien być ostatni stan pogody. Aplikacja powinna umożliwiać odświeżenie informacji pogodowych bez przeładowania strony.

#### Dla ograniczonej grupy użytkowników aplikacja powinna umożliwiać:
- Konfigurację adresu usługi sieciowej wykorzystywanej do pobierania danych pogodowych(np.yahoo).
- Edycję listy miast(dodawanie,usuwanie, zmiana) dla których możliwe jest sprawdzenie pogody

Zalecane jest, aby rozwiązanie umożliwiało rozszerzenie swojej funkcjonalności również na innych dostawców danych pogodowych.

Należy użyć framework'a Symfony, działającego na Docker z PHP Możliwość użycia bibliotek firm trzecich.

Mile widziane:
- Stworzenie strony responsywnej
- Wykorzystanie REST API.
- Implementacja mechanizmów zabezpieczających/walidacji poprawiających jakość przekazu informacji.
- Użycie nowoczesnego frameworka frontendowego Angular2+ z wykorzystaniem Material 2
- Testy jednostkowe i/lub integracyjne
- Utworzenie Docker Image i zamieszczenie go na Docker Hub-ie

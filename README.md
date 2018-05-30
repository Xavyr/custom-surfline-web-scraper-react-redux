# surfline-web-scraper
A Southern California surf scraper; built in React/Redux on the frontend this application utilizes Redux forms for user input.

Depending on the inputted beach name (venice, ventura, etc.) the user receives the given surf report scraped from surfline. 

The backend is built in Node.js, utilizing Cherio for web scraping inside of the middleware controller. The results are cached in MemCache saving the redundant computation of scraping the same beach multiple times. 


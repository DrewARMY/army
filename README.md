# Army
Website for drew.army

## Get Started

### Requirements
- **PHP ^8.1**
- **Laravel ^10.10**
### Installation

Clone the repo
```bash
 git clone git@github.com:DrewARMY/army.git
```
Copy the .env.example to get a local environment file
```bash
 cp .env.example .env
```

After cloning the repo, install the packages via composer
```bash
 composer install
```

If you are using sail; make sure to install sail
```bash
php artisan sail:install
```

If you are using sail; create an alias for sail command for sail
```bash
 alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```

If you are using sail; Deploy the server
```bash
sail up -d
```
if you are using the sail; run the composer install
```bash
sail composer install
```

Run the migrations (using sail)
```bash
sail php artisan migrate
```
Run the migrations (not using sail)
```bash
php artisan migrate
```
Run the migrations (using sail)
```bash
sail php artisan migrate
```

Install npm packages ( using sail)
```bash
sail npm install
```
Install npm packages (not using sail)
```bash
npm install
```

Run the frontend( using sail)
```bash
sail npm install
```
Install npm packages (not using sail)
```bash
npm install
```

If you are not using sail, deploy the server
```bash
php artisan serve
```


Run the frontend( using sail)
```bash
sail npm run dev
```
Run the frontend (not using sail)
```bash
npm run dev
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email github@drewroberts.com 

## Credits

- [Drew Roberts](https://github.com/roberts)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
 

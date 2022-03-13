# KygekTeam API

> **NOTICE:** The KygekTeam API is currently down, however it's unlikely it will return back online.

## About
Kygek was busy writing the new website, then an idea struck me... "What if we had an API that used JSON like the new website!" So, I began coding, and this is what it came out to be.
## The server
The server is my Raspberry Pi 3B V1.2, that sits on my bedroom floor 24/7 hosting websites and Discord bots. I set it up using Express (what is shown in this repo), Apache2 (with mod_proxy), and Certbot by Let's Encrypt.
## How to use the API
`GET https://api.kygek.team/`: Get a list of all plugins with all their information.<br />
`GET https://api.kygek.team/plugin/<plugin>`: Get a plugin's information.<br />
`GET https://api.kygek.team/names`: Get a list of plugins with only their names.<br />
`GET https://api.kygek.team/downloadcount`: Poggit download count, like https://kygek.team/realtime.
## License
This API is licensed under the GPL-3.0 license.<br />
If you need help using the API, join [our Discord](https://discord.gg/CXtqUZv).<br />
If you find a bug in the API, file an issue at [the GitHub issues page](https://github.com/KygekTeam/api/issues). You can also report it on Discord.<br />
If you want to help with development, submit a PR at [the GitHub pull requests page](https://github.com/KygekTeam/api/pulls).

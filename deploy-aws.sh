#!/usr/bin/env bash

scp -i ~/.ssh/scrumPoker.pem -r ~/stuff/scrumPoker/deploy/public ubuntu@scrumpoker.githop.com:~/www/

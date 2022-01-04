FROM fusuf/whatsasena:latest

RUN git clone https://github.com/imeshshamika1/c /root/CyberQueen
WORKDIR /root/CyberQueen/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "cyberqueen.js"]

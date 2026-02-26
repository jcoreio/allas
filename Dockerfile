FROM golang:1.26.0-alpine3.23 AS build

WORKDIR /usr/src/app

# pre-copy/cache go.mod for pre-downloading dependencies and only redownloading them in subsequent builds if they change
COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -v -o /usr/local/bin/allas ./...

FROM alpine:3.23

WORKDIR /usr/src/app

COPY --from=build /usr/local/bin/allas /usr/local/bin/allas

ENTRYPOINT ["allas"]

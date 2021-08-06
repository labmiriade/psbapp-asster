/**
 * This File is autogenerated by ./bin/openapi-parser.ts
 * Should not be modified.
 */

export const OpenAPI = {
  "openapi": "3.0.3",
  "info": {
    "title": "PSBAPP AssTer API",
    "version": "2021-05-27"
  },
  "paths": {
    "/p/{placeId}": {
      "parameters": [
        {
          "in": "path",
          "schema": {
            "type": "string"
          },
          "name": "placeId",
          "required": true
        }
      ],
      "get": {
        "tags": [
          "End User"
        ],
        "description": "Ottieni informazioni su un luogo",
        "responses": {
          "200": {
            "description": "Informazioni sul luogo",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "placeId": {
                      "type": "string"
                    },
                    "istatCode": {
                      "type": "string"
                    },
                    "category": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string"
                    },
                    "streetName": {
                      "type": "string"
                    },
                    "streetNumber": {
                      "type": "string"
                    },
                    "city": {
                      "type": "string"
                    },
                    "province": {
                      "type": "string"
                    },
                    "openingTimeDesc": {
                      "type": "string",
                      "description": "La descrizione testuale degli orari di apertura"
                    },
                    "website": {
                      "type": "string",
                      "format": "uri"
                    },
                    "emailAddress": {
                      "type": "string"
                    },
                    "lat": {
                      "type": "string"
                    },
                    "lon": {
                      "type": "string"
                    },
                    "searchable": {
                      "type": "boolean"
                    }
                  }
                }
              }
            }
          },
          "444": {
            "description": "Luogo non esistente"
          }
        }
      }
    },
    "/search/p": {
      "get": {
        "tags": [
          "End User",
          "Search"
        ],
        "parameters": [
          {
            "name": "q",
            "in": "query",
            "description": "The text for full text search on all fields",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "near",
            "in": "query",
            "description": "Latitude and longitude for the search",
            "required": false,
            "schema": {
              "type": "string",
              "pattern": "\\d{1,2}(.\\d*)\\,\\d{1,2}(.\\d*)"
            }
          }
        ],
        "summary": "Search places",
        "description": "At least one of the 'q' or the 'near' parameters is required",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "places": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "placeId": {
                            "type": "string"
                          },
                          "istatCode": {
                            "type": "string"
                          },
                          "category": {
                            "type": "string"
                          },
                          "description": {
                            "type": "string"
                          },
                          "name": {
                            "type": "string"
                          },
                          "streetName": {
                            "type": "string"
                          },
                          "streetNumber": {
                            "type": "string"
                          },
                          "city": {
                            "type": "string"
                          },
                          "province": {
                            "type": "string"
                          },
                          "openingTimeDesc": {
                            "type": "string",
                            "description": "La descrizione testuale degli orari di apertura"
                          },
                          "website": {
                            "type": "string",
                            "format": "uri"
                          },
                          "emailAddress": {
                            "type": "string"
                          },
                          "lat": {
                            "type": "string"
                          },
                          "lon": {
                            "type": "string"
                          },
                          "searchable": {
                            "type": "boolean"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "PlaceList": {
        "type": "object",
        "properties": {
          "places": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "placeId": {
                  "type": "string"
                },
                "istatCode": {
                  "type": "string"
                },
                "category": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "streetName": {
                  "type": "string"
                },
                "streetNumber": {
                  "type": "string"
                },
                "city": {
                  "type": "string"
                },
                "province": {
                  "type": "string"
                },
                "openingTimeDesc": {
                  "type": "string",
                  "description": "La descrizione testuale degli orari di apertura"
                },
                "website": {
                  "type": "string",
                  "format": "uri"
                },
                "emailAddress": {
                  "type": "string"
                },
                "lat": {
                  "type": "string"
                },
                "lon": {
                  "type": "string"
                },
                "searchable": {
                  "type": "boolean"
                }
              }
            }
          }
        }
      },
      "PlaceInfo": {
        "type": "object",
        "properties": {
          "placeId": {
            "type": "string"
          },
          "istatCode": {
            "type": "string"
          },
          "category": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "streetName": {
            "type": "string"
          },
          "streetNumber": {
            "type": "string"
          },
          "city": {
            "type": "string"
          },
          "province": {
            "type": "string"
          },
          "openingTimeDesc": {
            "type": "string",
            "description": "La descrizione testuale degli orari di apertura"
          },
          "website": {
            "type": "string",
            "format": "uri"
          },
          "emailAddress": {
            "type": "string"
          },
          "lat": {
            "type": "string"
          },
          "lon": {
            "type": "string"
          },
          "searchable": {
            "type": "boolean"
          }
        }
      }
    }
  },
  "tags": [
    {
      "name": "End User",
      "description": "Chiamate utilizzate dall'end user, non sono autenticate."
    },
    {
      "name": "Search",
      "description": "Chiamate per cercare i luoghi"
    }
  ]
}
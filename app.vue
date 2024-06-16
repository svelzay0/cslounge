<script setup lang="ts">
import { setupGlobalSettings } from "~/middleware/settings";
setupGlobalSettings();
</script>

<template>
  <v-app>
    <NuxtLayout>
      <LayoutNavbar />
      <v-main>
        <NuxtPage class="ma-4" />
      </v-main>
    </NuxtLayout>
  </v-app>
</template>
<!-- auth -->

<!-- /api/auth/register -->
<!-- /api/auth/login -->
<!-- /api/auth/logout -->
<!-- /api/auth/refresh -->


<!-- box -->

<!-- /api/box -->
<!-- /api/box/{id} -->
<!-- /api/box/{id}/open -->


<!-- contract -->
<!-- /api/contract -->
<!-- /api/upgrade -->

<!-- "/api/auth/login": {
  "post": {
      "tags": [
          "auth"
      ],
      "summary": "Login a user",
      "operationId": "login",
      "requestBody": {
          "required": true,
          "content": {
              "application/json": {
                  "schema": {
                      "$ref": "#/components/schemas/UserLoginRequest"
                  }
              }
          }
      },
      "responses": {
          "200": {
              "description": "Successful operation",
              "content": {
                  "application/json": {
                      "schema": {
                          "$ref": "#/components/schemas/AuthResource"
                      }
                  }
              }
          },
          "400": {
              "description": "Bad request"
          },
          "401": {
              "$ref": "#/components/schemas/ErrorResource"
          }
      }
  }
},
"/api/auth/logout": {
  "post": {
      "tags": [
          "auth"
      ],
      "summary": "Logout the user",
      "operationId": "logout",
      "parameters": [
          {
              "name": "Authorization",
              "in": "header",
              "description": "Bearer Token",
              "required": true,
              "schema": {
                  "type": "string",
                  "default": "Bearer {token}"
              }
          }
      ],
      "responses": {
          "201": {
              "description": "Successful operation"
          },
          "400": {
              "description": "Bad request"
          }
      },
      "security": [
          {
              "bearerAuth": []
          }
      ]
  }
},
"/api/auth/refresh": {
  "post": {
      "tags": [
          "auth"
      ],
      "summary": "Refresh the user token",
      "operationId": "refresh",
      "parameters": [
          {
              "name": "Authorization",
              "in": "header",
              "description": "Bearer Token",
              "required": true,
              "schema": {
                  "type": "string",
                  "default": "Bearer {token}"
              }
          }
      ],
      "responses": {
          "200": {
              "description": "Successful operation",
              "content": {
                  "application/json": {
                      "schema": {
                          "$ref": "#/components/schemas/AuthResource"
                      }
                  }
              }
          },
          "401": {
              "$ref": "#/components/schemas/ErrorResource"
          }
      },
      "security": [
          {
              "bearerAuth": []
          }
      ]
  }
},
"/api/box": {
  "get": {
      "tags": [
          "box"
      ],
      "summary": "Get the list of boxes",
      "operationId": "boxList",
      "responses": {
          "200": {
              "description": "Successful operation",
              "content": {
                  "application/json": {
                      "schema": {
                          "type": "array",
                          "items": {
                              "$ref": "#/components/schemas/BoxResource"
                          }
                      }
                  }
              }
          }
      }
  }
},
"/api/box/{id}": {
  "get": {
      "tags": [
          "box"
      ],
      "summary": "Get a specific box by ID",
      "operationId": "getBoxById",
      "parameters": [
          {
              "name": "id",
              "in": "path",
              "description": "ID of the box",
              "required": true,
              "schema": {
                  "type": "integer"
              }
          }
      ],
      "responses": {
          "200": {
              "description": "Successful operation",
              "content": {
                  "application/json": {
                      "schema": {
                          "$ref": "#/components/schemas/BoxResource"
                      }
                  }
              }
          },
          "404": {
              "description": "Not Found"
          }
      }
  }
},
"/api/box/{id}/open": {
  "post": {
      "tags": [
          "box"
      ],
      "summary": "Open a box",
      "operationId": "openBox",
      "parameters": [
          {
              "name": "id",
              "in": "path",
              "description": "ID of the box",
              "required": true,
              "schema": {
                  "type": "integer"
              }
          }
      ],
      "requestBody": {
          "required": true,
          "content": {
              "application/json": {
                  "schema": {
                      "$ref": "#/components/schemas/OpenBoxRequest"
                  }
              }
          }
      },
      "responses": {
          "200": {
              "description": "Successful operation",
              "content": {
                  "application/json": {
                      "schema": {
                          "type": "array",
                          "items": {
                              "$ref": "#/components/schemas/ItemResource"
                          }
                      }
                  }
              }
          },
          "400": {
              "$ref": "#/components/schemas/ErrorResource"
          },
          "404": {
              "$ref": "#/components/schemas/ErrorResource"
          }
      },
      "security": [
          {
              "bearerAuth": []
          }
      ]
  }
},
"/api/contract": {
  "post": {
      "tags": [
          "inventory"
      ],
      "summary": "Contract items",
      "operationId": "contract",
      "requestBody": {
          "required": true,
          "content": {
              "application/json": {
                  "schema": {
                      "$ref": "#/components/schemas/ContractRequest"
                  }
              }
          }
      },
      "responses": {
          "200": {
              "description": "Successful operation",
              "content": {
                  "application/json": {
                      "schema": {
                          "$ref": "#/components/schemas/ItemResource"
                      }
                  }
              }
          },
          "400": {
              "$ref": "#/components/schemas/ErrorResource"
          },
          "404": {
              "$ref": "#/components/schemas/ErrorResource"
          },
          "422": {
              "$ref": "#/components/schemas/ErrorResource"
          },
          "500": {
              "$ref": "#/components/schemas/ErrorResource"
          }
      },
      "security": [
          {
              "bearerAuth": []
          }
      ]
  }
},
"/api/upgrade": {
  "post": {
      "tags": [
          "inventory"
      ],
      "summary": "Upgrade item",
      "operationId": "upgrade",
      "requestBody": {
          "required": true,
          "content": {
              "application/json": {
                  "schema": {
                      "$ref": "#/components/schemas/UpgradeRequest"
                  }
              }
          }
      },
      "responses": {
          "200": {
              "description": "Successful operation",
              "content": {
                  "application/json": {
                      "schema": {
                          "$ref": "#/components/schemas/UpgradeResource"
                      }
                  }
              }
          },
          "400": {
              "$ref": "#/components/schemas/ErrorResource"
          },
          "404": {
              "$ref": "#/components/schemas/ErrorResource"
          },
          "422": {
              "$ref": "#/components/schemas/ErrorResource"
          },
          "500": {
              "$ref": "#/components/schemas/ErrorResource"
          }
      },
      "security": [
          {
              "bearerAuth": []
          }
      ]
  }
} -->



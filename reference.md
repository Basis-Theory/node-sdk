# Reference

## ApplePay

<details><summary><code>client.applePay.<a href="/src/api/resources/applePay/client/Client.ts">tokenize</a>({ ...params }) -> BasisTheory.ApplePayTokenizeResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applePay.tokenize();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.ApplePayTokenizeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplePay.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Applications

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">list</a>({ ...params }) -> core.Page<BasisTheory.Application></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.applications.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.applications.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.ApplicationsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Applications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">create</a>({ ...params }) -> BasisTheory.Application</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.create({
    name: "name",
    type: "type",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.CreateApplicationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Applications.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">get</a>(id) -> BasisTheory.Application</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Applications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">update</a>(id, { ...params }) -> BasisTheory.Application</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.update("id", {
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.UpdateApplicationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Applications.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">delete</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.delete("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Applications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">getByKey</a>() -> BasisTheory.Application</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.getByKey();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Applications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ApplicationKeys

<details><summary><code>client.applicationKeys.<a href="/src/api/resources/applicationKeys/client/Client.ts">list</a>(id, { ...params }) -> BasisTheory.ApplicationKey[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applicationKeys.list("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.ApplicationKeysListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applicationKeys.<a href="/src/api/resources/applicationKeys/client/Client.ts">create</a>(id) -> BasisTheory.ApplicationKey</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applicationKeys.create("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationKeys.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applicationKeys.<a href="/src/api/resources/applicationKeys/client/Client.ts">get</a>(id, keyId) -> BasisTheory.ApplicationKey</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applicationKeys.get("id", "keyId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**keyId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applicationKeys.<a href="/src/api/resources/applicationKeys/client/Client.ts">delete</a>(id, keyId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applicationKeys.delete("id", "keyId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**keyId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ApplicationTemplates

<details><summary><code>client.applicationTemplates.<a href="/src/api/resources/applicationTemplates/client/Client.ts">list</a>() -> BasisTheory.ApplicationTemplate[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applicationTemplates.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ApplicationTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applicationTemplates.<a href="/src/api/resources/applicationTemplates/client/Client.ts">get</a>(id) -> BasisTheory.ApplicationTemplate</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applicationTemplates.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationTemplates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tokens

<details><summary><code>client.tokens.<a href="/src/api/resources/tokens/client/Client.ts">detokenize</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokens.detokenize({
    key: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tokens.<a href="/src/api/resources/tokens/client/Client.ts">tokenize</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokens.tokenize({
    key: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tokens.<a href="/src/api/resources/tokens/client/Client.ts">list</a>({ ...params }) -> core.Page<BasisTheory.Token></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.tokens.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.tokens.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.TokensListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tokens.<a href="/src/api/resources/tokens/client/Client.ts">create</a>({ ...params }) -> BasisTheory.Token</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokens.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.CreateTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tokens.<a href="/src/api/resources/tokens/client/Client.ts">search</a>({ ...params }) -> core.Page<BasisTheory.Token></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.tokens.search();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.tokens.search();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.SearchTokensRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tokens.<a href="/src/api/resources/tokens/client/Client.ts">get</a>(id) -> BasisTheory.Token</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokens.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tokens.<a href="/src/api/resources/tokens/client/Client.ts">delete</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokens.delete("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tokens.<a href="/src/api/resources/tokens/client/Client.ts">update</a>(id, { ...params }) -> BasisTheory.Token</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokens.update("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.UpdateTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tokens.<a href="/src/api/resources/tokens/client/Client.ts">listV2</a>({ ...params }) -> core.Page<BasisTheory.Token></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.tokens.listV2();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.tokens.listV2();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.TokensListV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tokens.<a href="/src/api/resources/tokens/client/Client.ts">searchV2</a>({ ...params }) -> core.Page<BasisTheory.Token></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.tokens.searchV2();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.tokens.searchV2();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.SearchTokensRequestV2`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Enrichments

<details><summary><code>client.enrichments.<a href="/src/api/resources/enrichments/client/Client.ts">bankAccountVerify</a>({ ...params }) -> BasisTheory.BankVerificationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.enrichments.bankAccountVerify({
    tokenId: "token_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.BankVerificationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Enrichments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Googlepay

<details><summary><code>client.googlepay.<a href="/src/api/resources/googlepay/client/Client.ts">tokenize</a>({ ...params }) -> BasisTheory.GooglePayTokenizeResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.googlepay.tokenize();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.GooglePayTokenizeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Googlepay.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Logs

<details><summary><code>client.logs.<a href="/src/api/resources/logs/client/Client.ts">list</a>({ ...params }) -> core.Page<BasisTheory.Log></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.logs.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.logs.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.LogsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Logs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.logs.<a href="/src/api/resources/logs/client/Client.ts">getEntityTypes</a>() -> BasisTheory.LogEntityType[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.logs.getEntityTypes();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Logs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## NetworkTokens

<details><summary><code>client.networkTokens.<a href="/src/api/resources/networkTokens/client/Client.ts">create</a>({ ...params }) -> BasisTheory.NetworkToken</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.networkTokens.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.CreateNetworkTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NetworkTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.networkTokens.<a href="/src/api/resources/networkTokens/client/Client.ts">cryptogram</a>(id) -> BasisTheory.NetworkTokenCryptogram</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.networkTokens.cryptogram("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NetworkTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.networkTokens.<a href="/src/api/resources/networkTokens/client/Client.ts">get</a>(id) -> BasisTheory.NetworkToken</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.networkTokens.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NetworkTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.networkTokens.<a href="/src/api/resources/networkTokens/client/Client.ts">delete</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.networkTokens.delete("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NetworkTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Permissions

<details><summary><code>client.permissions.<a href="/src/api/resources/permissions/client/Client.ts">list</a>({ ...params }) -> BasisTheory.Permission[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.permissions.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.PermissionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Permissions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Proxies

<details><summary><code>client.proxies.<a href="/src/api/resources/proxies/client/Client.ts">list</a>({ ...params }) -> core.Page<BasisTheory.Proxy></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.proxies.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.proxies.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.ProxiesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Proxies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.proxies.<a href="/src/api/resources/proxies/client/Client.ts">create</a>({ ...params }) -> BasisTheory.Proxy</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.proxies.create({
    name: "name",
    destinationUrl: "destination_url",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.CreateProxyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Proxies.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.proxies.<a href="/src/api/resources/proxies/client/Client.ts">get</a>(id) -> BasisTheory.Proxy</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.proxies.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Proxies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.proxies.<a href="/src/api/resources/proxies/client/Client.ts">update</a>(id, { ...params }) -> BasisTheory.Proxy</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.proxies.update("id", {
    name: "name",
    destinationUrl: "destination_url",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.UpdateProxyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Proxies.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.proxies.<a href="/src/api/resources/proxies/client/Client.ts">delete</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.proxies.delete("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Proxies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.proxies.<a href="/src/api/resources/proxies/client/Client.ts">patch</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.proxies.patch("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.PatchProxyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Proxies.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Reactors

<details><summary><code>client.reactors.<a href="/src/api/resources/reactors/client/Client.ts">list</a>({ ...params }) -> core.Page<BasisTheory.Reactor></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.reactors.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.reactors.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.ReactorsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reactors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reactors.<a href="/src/api/resources/reactors/client/Client.ts">create</a>({ ...params }) -> BasisTheory.Reactor</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reactors.create({
    name: "name",
    code: "code",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.CreateReactorRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reactors.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reactors.<a href="/src/api/resources/reactors/client/Client.ts">get</a>(id) -> BasisTheory.Reactor</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reactors.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reactors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reactors.<a href="/src/api/resources/reactors/client/Client.ts">update</a>(id, { ...params }) -> BasisTheory.Reactor</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reactors.update("id", {
    name: "name",
    code: "code",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.UpdateReactorRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reactors.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reactors.<a href="/src/api/resources/reactors/client/Client.ts">delete</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reactors.delete("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reactors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reactors.<a href="/src/api/resources/reactors/client/Client.ts">patch</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reactors.patch("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.PatchReactorRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reactors.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reactors.<a href="/src/api/resources/reactors/client/Client.ts">react</a>(id, { ...params }) -> BasisTheory.ReactResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reactors.react("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.ReactRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reactors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reactors.<a href="/src/api/resources/reactors/client/Client.ts">reactAsync</a>(id, { ...params }) -> BasisTheory.AsyncReactResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reactors.reactAsync("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.ReactRequestAsync`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reactors.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Roles

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">list</a>() -> BasisTheory.Role[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sessions

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">create</a>() -> BasisTheory.CreateSessionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Sessions.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sessions.<a href="/src/api/resources/sessions/client/Client.ts">authorize</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sessions.authorize({
    nonce: "nonce",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.AuthorizeSessionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TokenIntents

<details><summary><code>client.tokenIntents.<a href="/src/api/resources/tokenIntents/client/Client.ts">get</a>(id) -> BasisTheory.TokenIntent</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokenIntents.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokenIntents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tokenIntents.<a href="/src/api/resources/tokenIntents/client/Client.ts">delete</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokenIntents.delete("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokenIntents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tokenIntents.<a href="/src/api/resources/tokenIntents/client/Client.ts">create</a>({ ...params }) -> BasisTheory.CreateTokenIntentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tokenIntents.create({
    type: "x",
    data: {
        key: "value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.CreateTokenIntentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TokenIntents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhooks

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">ping</a>() -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Simple endpoint that can be utilized to verify the application is running

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.ping();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">get</a>(id) -> BasisTheory.Webhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the webhook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">update</a>(id, { ...params }) -> BasisTheory.Webhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a new webhook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.update("id", {
    name: "webhook-update",
    url: "http://www.example.com",
    events: ["token:created"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.UpdateWebhookRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">delete</a>(id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a new webhook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.delete("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">list</a>() -> BasisTheory.WebhookList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the configured webhooks

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">create</a>({ ...params }) -> BasisTheory.Webhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new webhook

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.create({
    name: "webhook-create",
    url: "http://www.example.com",
    events: ["token:created"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.CreateWebhookRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AccountUpdater Jobs

<details><summary><code>client.accountUpdater.jobs.<a href="/src/api/resources/accountUpdater/resources/jobs/client/Client.ts">get</a>(id) -> BasisTheory.AccountUpdaterJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the account updater batch job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountUpdater.jobs.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accountUpdater.jobs.<a href="/src/api/resources/accountUpdater/resources/jobs/client/Client.ts">list</a>({ ...params }) -> BasisTheory.AccountUpdaterJobList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of account updater batch jobs

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountUpdater.jobs.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.accountUpdater.JobsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accountUpdater.jobs.<a href="/src/api/resources/accountUpdater/resources/jobs/client/Client.ts">create</a>() -> BasisTheory.AccountUpdaterJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the created account updater batch job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountUpdater.jobs.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AccountUpdater RealTime

<details><summary><code>client.accountUpdater.realTime.<a href="/src/api/resources/accountUpdater/resources/realTime/client/Client.ts">invoke</a>({ ...params }) -> BasisTheory.AccountUpdaterRealTimeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the update result

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountUpdater.realTime.invoke({
    tokenId: "9a420b15-ddfe-4793-9466-48f53520e47c",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.accountUpdater.AccountUpdaterRealTimeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RealTime.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ApplePay Domain

<details><summary><code>client.applePay.domain.<a href="/src/api/resources/applePay/resources/domain/client/Client.ts">deregister</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applePay.domain.deregister({
    domain: "domain",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.applePay.ApplePayDomainDeregistrationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Domain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applePay.domain.<a href="/src/api/resources/applePay/resources/domain/client/Client.ts">get</a>() -> BasisTheory.ApplePayDomainRegistrationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applePay.domain.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Domain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applePay.domain.<a href="/src/api/resources/applePay/resources/domain/client/Client.ts">register</a>({ ...params }) -> BasisTheory.ApplePayDomainRegistrationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applePay.domain.register({
    domain: "domain",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.applePay.ApplePayDomainRegistrationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Domain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.applePay.domain.<a href="/src/api/resources/applePay/resources/domain/client/Client.ts">registerAll</a>({ ...params }) -> BasisTheory.ApplePayDomainRegistrationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applePay.domain.registerAll();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.applePay.ApplePayDomainRegistrationListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Domain.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ApplePay Session

<details><summary><code>client.applePay.session.<a href="/src/api/resources/applePay/resources/session/client/Client.ts">create</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applePay.session.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.applePay.ApplePaySessionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Session.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Reactors Results

<details><summary><code>client.reactors.results.<a href="/src/api/resources/reactors/resources/results/client/Client.ts">get</a>(id, requestId) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reactors.results.get("id", "requestId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Results.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tenants Connections

<details><summary><code>client.tenants.connections.<a href="/src/api/resources/tenants/resources/connections/client/Client.ts">create</a>({ ...params }) -> BasisTheory.CreateTenantConnectionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.connections.create({
    strategy: "strategy",
    options: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.tenants.CreateTenantConnectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Connections.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.connections.<a href="/src/api/resources/tenants/resources/connections/client/Client.ts">delete</a>() -> BasisTheory.CreateTenantConnectionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.connections.delete();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Connections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tenants Invitations

<details><summary><code>client.tenants.invitations.<a href="/src/api/resources/tenants/resources/invitations/client/Client.ts">list</a>({ ...params }) -> core.Page<BasisTheory.TenantInvitationResponse></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.tenants.invitations.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.tenants.invitations.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.tenants.InvitationsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invitations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.invitations.<a href="/src/api/resources/tenants/resources/invitations/client/Client.ts">create</a>({ ...params }) -> BasisTheory.TenantInvitationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.invitations.create({
    email: "email",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.tenants.CreateTenantInvitationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invitations.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.invitations.<a href="/src/api/resources/tenants/resources/invitations/client/Client.ts">resend</a>(invitationId) -> BasisTheory.TenantInvitationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.invitations.resend("invitationId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invitationId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invitations.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.invitations.<a href="/src/api/resources/tenants/resources/invitations/client/Client.ts">get</a>(invitationId) -> BasisTheory.TenantInvitationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.invitations.get("invitationId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invitationId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invitations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.invitations.<a href="/src/api/resources/tenants/resources/invitations/client/Client.ts">delete</a>(invitationId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.invitations.delete("invitationId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invitationId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invitations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tenants Members

<details><summary><code>client.tenants.members.<a href="/src/api/resources/tenants/resources/members/client/Client.ts">list</a>({ ...params }) -> BasisTheory.TenantMemberResponsePaginatedList</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.members.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.tenants.MembersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Members.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.members.<a href="/src/api/resources/tenants/resources/members/client/Client.ts">update</a>(memberId, { ...params }) -> BasisTheory.TenantMemberResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.members.update("memberId", {
    role: "role",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**memberId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.tenants.UpdateTenantMemberRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Members.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.members.<a href="/src/api/resources/tenants/resources/members/client/Client.ts">delete</a>(memberId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.members.delete("memberId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**memberId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Members.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tenants Owner

<details><summary><code>client.tenants.owner.<a href="/src/api/resources/tenants/resources/owner/client/Client.ts">get</a>() -> BasisTheory.TenantMemberResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.owner.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Owner.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tenants Self

<details><summary><code>client.tenants.self.<a href="/src/api/resources/tenants/resources/self/client/Client.ts">getUsageReports</a>() -> BasisTheory.TenantUsageReport</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.self.getUsageReports();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Self.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.self.<a href="/src/api/resources/tenants/resources/self/client/Client.ts">get</a>() -> BasisTheory.Tenant</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.self.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Self.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.self.<a href="/src/api/resources/tenants/resources/self/client/Client.ts">update</a>({ ...params }) -> BasisTheory.Tenant</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.self.update({
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.tenants.UpdateTenantRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Self.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.self.<a href="/src/api/resources/tenants/resources/self/client/Client.ts">delete</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.self.delete();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Self.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Threeds Sessions

<details><summary><code>client.threeds.sessions.<a href="/src/api/resources/threeds/resources/sessions/client/Client.ts">create</a>({ ...params }) -> BasisTheory.CreateThreeDsSessionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threeds.sessions.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BasisTheory.threeds.CreateThreeDsSessionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.threeds.sessions.<a href="/src/api/resources/threeds/resources/sessions/client/Client.ts">authenticate</a>(sessionId, { ...params }) -> BasisTheory.ThreeDsAuthentication</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threeds.sessions.authenticate("sessionId", {
    authenticationCategory: "authentication_category",
    authenticationType: "authentication_type",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sessionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BasisTheory.threeds.AuthenticateThreeDsSessionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.threeds.sessions.<a href="/src/api/resources/threeds/resources/sessions/client/Client.ts">getChallengeResult</a>(sessionId) -> BasisTheory.ThreeDsAuthentication</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threeds.sessions.getChallengeResult("sessionId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sessionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.threeds.sessions.<a href="/src/api/resources/threeds/resources/sessions/client/Client.ts">get</a>(id) -> BasisTheory.ThreeDsSession</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.threeds.sessions.get("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sessions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhooks Events

<details><summary><code>client.webhooks.events.<a href="/src/api/resources/webhooks/resources/events/client/Client.ts">list</a>() -> BasisTheory.EventTypes</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return a list of available event types

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.events.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

# BasisTheory TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=https%3A%2F%2Fgithub.com%2FBasis-Theory%2Fnode-sdk)
[![npm shield](https://img.shields.io/npm/v/@basis-theory/node-sdk)](https://www.npmjs.com/package/@basis-theory/node-sdk)

The Basis Theory TypeScript library provides convenient access to the BasisTheory API from TypeScript.

## Documentation

API reference documentation is available [here](https://api.basistheory.com).

## Installation

```sh
npm i -s @basis-theory/node-sdk
```

## Reference

A full reference for this library is available [here](https://github.com/Basis-Theory/node-sdk/blob/HEAD/./reference.md).

## Usage

Instantiate and use the client with the following:

```typescript
import { BasisTheoryClient } from "@basis-theory/node-sdk";

const client = new BasisTheoryClient({ apiKey: "YOUR_API_KEY", correlationId: "YOUR_CORRELATION_ID" });
await client.tenants.self.get();
```

## Request And Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { BasisTheory } from "@basis-theory/node-sdk";

const request: BasisTheory.ApplicationsListRequest = {
    ...
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { BasisTheoryError } from "@basis-theory/node-sdk";

try {
    await client.tenants.self.get(...);
} catch (err) {
    if (err instanceof BasisTheoryError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
    }
}
```

## Pagination

List endpoints are paginated. The SDK provides an iterator so that you can simply loop over the items:

```typescript
import { BasisTheoryClient } from "@basis-theory/node-sdk";

const client = new BasisTheoryClient({ apiKey: "YOUR_API_KEY", correlationId: "YOUR_CORRELATION_ID" });
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

## Advanced

### Additional Headers

If you would like to send additional headers as part of the request, use the `headers` request option.

```typescript
const response = await client.tenants.self.get(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retryable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retryable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await client.tenants.self.get(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.tenants.self.get(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.tenants.self.get(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Runtime Compatibility

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK works in the following
runtimes:

- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

### Customizing Fetch Client

The SDK provides a way for your to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { BasisTheoryClient } from "@basis-theory/node-sdk";

const client = new BasisTheoryClient({
    ...
    fetcher: // provide your implementation here
});
```

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!

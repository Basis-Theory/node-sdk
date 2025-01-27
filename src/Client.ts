/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Applications } from "./api/resources/applications/client/Client";
import { ApplicationKeys } from "./api/resources/applicationKeys/client/Client";
import { ApplicationTemplates } from "./api/resources/applicationTemplates/client/Client";
import { Tokens } from "./api/resources/tokens/client/Client";
import { Enrichments } from "./api/resources/enrichments/client/Client";
import { Logs } from "./api/resources/logs/client/Client";
import { Permissions } from "./api/resources/permissions/client/Client";
import { Proxies } from "./api/resources/proxies/client/Client";
import { Reactors } from "./api/resources/reactors/client/Client";
import { Roles } from "./api/resources/roles/client/Client";
import { Sessions } from "./api/resources/sessions/client/Client";
import { TokenIntents } from "./api/resources/tokenIntents/client/Client";
import { Webhooks } from "./api/resources/webhooks/client/Client";
import { Connections } from "./api/resources/connections/client/Client";
import { Tenants } from "./api/resources/tenants/client/Client";
import { Threeds } from "./api/resources/threeds/client/Client";

export declare namespace BasisTheoryClient {
    interface Options {
        environment?: core.Supplier<environments.BasisTheoryEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        /** Override the BT-TRACE-ID header */
        correlationId?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the BT-TRACE-ID header */
        correlationId?: string | undefined;
    }
}

export class BasisTheoryClient {
    constructor(protected readonly _options: BasisTheoryClient.Options = {}) {}

    protected _applications: Applications | undefined;

    public get applications(): Applications {
        return (this._applications ??= new Applications(this._options));
    }

    protected _applicationKeys: ApplicationKeys | undefined;

    public get applicationKeys(): ApplicationKeys {
        return (this._applicationKeys ??= new ApplicationKeys(this._options));
    }

    protected _applicationTemplates: ApplicationTemplates | undefined;

    public get applicationTemplates(): ApplicationTemplates {
        return (this._applicationTemplates ??= new ApplicationTemplates(this._options));
    }

    protected _tokens: Tokens | undefined;

    public get tokens(): Tokens {
        return (this._tokens ??= new Tokens(this._options));
    }

    protected _enrichments: Enrichments | undefined;

    public get enrichments(): Enrichments {
        return (this._enrichments ??= new Enrichments(this._options));
    }

    protected _logs: Logs | undefined;

    public get logs(): Logs {
        return (this._logs ??= new Logs(this._options));
    }

    protected _permissions: Permissions | undefined;

    public get permissions(): Permissions {
        return (this._permissions ??= new Permissions(this._options));
    }

    protected _proxies: Proxies | undefined;

    public get proxies(): Proxies {
        return (this._proxies ??= new Proxies(this._options));
    }

    protected _reactors: Reactors | undefined;

    public get reactors(): Reactors {
        return (this._reactors ??= new Reactors(this._options));
    }

    protected _roles: Roles | undefined;

    public get roles(): Roles {
        return (this._roles ??= new Roles(this._options));
    }

    protected _sessions: Sessions | undefined;

    public get sessions(): Sessions {
        return (this._sessions ??= new Sessions(this._options));
    }

    protected _tokenIntents: TokenIntents | undefined;

    public get tokenIntents(): TokenIntents {
        return (this._tokenIntents ??= new TokenIntents(this._options));
    }

    protected _webhooks: Webhooks | undefined;

    public get webhooks(): Webhooks {
        return (this._webhooks ??= new Webhooks(this._options));
    }

    protected _connections: Connections | undefined;

    public get connections(): Connections {
        return (this._connections ??= new Connections(this._options));
    }

    protected _tenants: Tenants | undefined;

    public get tenants(): Tenants {
        return (this._tenants ??= new Tenants(this._options));
    }

    protected _threeds: Threeds | undefined;

    public get threeds(): Threeds {
        return (this._threeds ??= new Threeds(this._options));
    }
}

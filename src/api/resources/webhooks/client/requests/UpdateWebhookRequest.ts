/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "webhook-update",
 *         url: "http://www.example.com",
 *         events: ["token:created"]
 *     }
 */
export interface UpdateWebhookRequest {
    /** The name of the webhook */
    name: string;
    /** The URL to which the webhook will send events */
    url: string;
    /** The email address to use for management notification events. Ie: webhook disabled */
    notifyEmail?: string;
    /** An array of event types that the webhook will listen for */
    events: string[];
}

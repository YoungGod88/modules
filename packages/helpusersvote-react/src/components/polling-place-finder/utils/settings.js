function get(key) {
  if (typeof window !== 'undefined') {
    if (window[key]) return window[key]
  }

  if (typeof process !== 'undefined' && process.env) {
    if (process.env[key]) return process.env[key]
  }

  return ''
}

const isProd = get('NODE_ENV') === 'production'

// Defaults
const defaultSentryDSN = isProd
  ? // helpusersvote-prod
    'https://5a35744699f8487c9a9d7e4f63ebe890@sentry.io/1306379'
  : // helpusersvote-dev
    'https://b121b5814f7e42fcb280586d93192087@sentry.io/1306374'

const defaultBallotApiHost = isProd
  ? 'https://ballot-api.helpusersvote.com'
  : 'https://ballot-api.staging.helpusersvote.com'

const defaultEventsApiHost = isProd
  ? 'https://events-api.helpusersvote.com'
  : 'https://events-api.staging.helpusersvote.com'

// Exports
export const CIVIC_INFO_API_KEY = get('CIVIC_INFO_API_KEY')
export const GMAPS_API_KEY = get('GMAPS_API_KEY')
export const GMAPS_API_SIGNATURE_SECRET = get('GMAPS_API_SIGNATURE_SECRET')
export const BALLOT_API_HOST = get('BALLOT_API_HOST') || defaultBallotApiHost
export const EVENTS_API_HOST = get('EVENTS_API_HOST') || defaultEventsApiHost
export const SENTRY_DSN = get('SENTRY_DSN') || defaultSentryDSN

export default {
  BALLOT_API_HOST,
  EVENTS_API_HOST,
  CIVIC_INFO_API_KEY,
  GMAPS_API_SIGNATURE_SECRET,
  GMAPS_API_KEY,
  SENTRY_DSN,
  isProd
}

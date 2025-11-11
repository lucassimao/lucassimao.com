import 'server-only'

import { cookies } from 'next/headers'
import { LANGUAGE_COOKIE, normalizeLanguage, Language } from './i18n'

export async function getServerLanguage(): Promise<Language> {
  const cookieStore = await cookies()
  const langCookie = cookieStore.get(LANGUAGE_COOKIE)?.value
  return normalizeLanguage(langCookie)
}

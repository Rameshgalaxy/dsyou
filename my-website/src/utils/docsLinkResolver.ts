
// src/utils/docsLinkResolver.ts
import {docsLinkMap} from '../docsLinkMap';

type ResolveInput = {
  featureId?: string;
  uiLocation?: string;
  errorCode?: string;
  fallback?: string; // canonical slug fallback (e.g. '/monitoring/alarm/overview')
};

/**
 * Returns a canonical docs slug (without /docs prefix) like:
 *   /monitoring/alarm/alarm-configuration
 */
export function resolveDocsSlug(input: ResolveInput): string | null {
  const {featureId, uiLocation, errorCode, fallback} = input;

  if (errorCode && docsLinkMap.byErrorCode[errorCode as keyof typeof docsLinkMap.byErrorCode]) {
    return docsLinkMap.byErrorCode[errorCode as keyof typeof docsLinkMap.byErrorCode];
  }

  if (featureId && docsLinkMap.byFeatureId[featureId as keyof typeof docsLinkMap.byFeatureId]) {
    return docsLinkMap.byFeatureId[featureId as keyof typeof docsLinkMap.byFeatureId];
  }

  if (uiLocation && docsLinkMap.byUiLocation[uiLocation as keyof typeof docsLinkMap.byUiLocation]) {
    return docsLinkMap.byUiLocation[uiLocation as keyof typeof docsLinkMap.byUiLocation];
  }

  return fallback ?? null;
}

/**
 * Convert canonical slug -> final navigable URL in Docusaurus
 * Example:
 *   baseUrl=/dsyou/
 *   docs routeBasePath=/docs
 * final path:
 *   /docs + canonical slug
 */
export function slugToDocsPath(canonicalSlug: string): string {
  return `/docs${canonicalSlug}`;
}

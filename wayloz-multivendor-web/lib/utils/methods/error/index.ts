import { ApolloError } from "@apollo/client";

export const onErrorMessageMatcher = <T extends string>(
  type: T | undefined,
  message: string | undefined | string[],
  errorMessages: Record<T, string[]>
): boolean => {
  if (!type) return true;
  return errorMessages[type]?.some((emessage) => emessage === message) ?? false;
};

// / Update input type to allow 'Error'
export const getGraphQLErrorMessage = (
  error: ApolloError | Error | undefined | null,
  t: (key: string) => string
): string | null => {
 
  if (!error) return null;
  const isApolloError = (err: unknown): err is ApolloError => {
    if (typeof err !== 'object' || err === null) {
      return false;
    }
    return 'graphQLErrors' in err || 'networkError' in err;
  };
  if (isApolloError(error)) {
    if (error.networkError) {
      return t("connection_failed_error_message");
    }
    if (error.graphQLErrors?.length) {
      return error.graphQLErrors.map((e) => e.message).join(', ');
    }
    return (
      error.message?.replace(/^GraphQL error: /, '') ||
      t('unexpected_error_occur_message')
    );
  }
  return error.message || t('unexpected_error_occur_message');
};
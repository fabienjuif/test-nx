import React, { Suspense } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { MockLink } from 'apollo-link-mock'
import { ApolloProvider } from '@apollo/react-hooks'
import { addDecorator } from '@storybook/react'
import Todo from './Todo'

const MOCKS = []

const addApolloProvider = mocks => story => {
  let client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new MockLink(mocks)
  })
  return (
    <Suspense fallback="Loading...">
      <ApolloProvider client={client}>{story()}</ApolloProvider>
    </Suspense>
  )
}

addDecorator(addApolloProvider(MOCKS))

export default { title: 'Button' }
export const checked = () => <Todo id="2" title="My TODO" checked />
export const notChecked = () => <Todo id="2" title="My TODO is not checked" />

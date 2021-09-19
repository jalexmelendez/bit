import { EnvsAspect } from './environments.aspect';

export { Descriptor, DEFAULT_ENV } from './environments.main.runtime';
export * from './environment';
export { ExecutionContext } from './context';
export { EnvService, ServiceDescriptor, ServiceHandler } from './services';
export { EnvRuntime } from './runtime/env-runtime';
export type { EnvsMain, EnvTransformer } from './environments.main.runtime';
export { EnvsAspect };
export { EnvsExecutionResult } from './runtime/envs-execution-result';
export type { EnvServiceList } from './env-service-list';
export { EnvDefinition } from './env-definition';
export default EnvsAspect;

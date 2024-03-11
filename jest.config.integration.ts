/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/__tests__/(units|integrations)/**/*.[jt]s?(x)"],
    setupFilesAfterEnv: ["./src/__tests__/utils/clearDataBase.ts"]
  };
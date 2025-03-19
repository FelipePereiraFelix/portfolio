// @ts-check
import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: ["eslint.config.mjs"],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	eslintPluginPrettierRecommended,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest,
			},
			ecmaVersion: 5,
			sourceType: "module",
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		rules: {
			"@typescript-eslint/no-explicit-any": "off", // Ignora erro de uso do tipo 'any'
			"@typescript-eslint/no-floating-promises": "warn", // Mostra alerta para promessas não tratadas
			"@typescript-eslint/no-unsafe-argument": "warn", // Mostra alerta para argumentos inseguros
			"@typescript-eslint/explicit-module-boundary-types": "off", // Desativa a exigência de tipos explícitos nas funções de módulos
			"@typescript-eslint/no-unused-vars": "warn", // Marca como 'warning' as variáveis não utilizadas
			"no-console": "warn", // Adiciona um warning para 'console.log' para evitar erros de uso em produção
			"@typescript-eslint/no-non-null-assertion": "off", // Permite o uso de '!' para afirmar que um valor não é nulo
		},
	},
);

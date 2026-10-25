// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CAPIBARA Docs',
      customCss: [
        './src/styles/custom.css',
      ],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/capibara3' },
        { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/capibara_collaboration/' }],
			sidebar: [
        {
          label: 'Joining',
          items: [
						// Each item here is one entry in the navigation menu.
            { label: "Joining", slug: 'joining/joining' },
            { label: "Onboarding", slug: "joining/onboarding" },
          ]
        },
				{
					label: 'Coding',
					items: [
            { label: "UNIX", slug: "coding/11_unix" },
            { label: "Terminal", slug: "coding/12_terminal" },
				    { label: "Git", slug: "coding/13_git" },
				    { label: "GitHub", slug: "coding/14_github" },
				    { label: "LaTeX", slug: "coding/15_local_latex" },
					],
				},
        {
          label: 'Python',
          items: [
				    { label: "Configuration", slug: "python/15_configuring_python_pip" },
				    { label: "Conda", slug: "python/31_conda_venv" },
				    { label: "Jupyter", slug: "python/41_jupyter_notebook" },
				    { label: "Conda", slug: "python/42_configuring_conda_venv" },
            { label: "NumPy & Pandas", slug: "python/43_numpy_pandas" },
				    { label: "Matplotlib", slug: "python/44_matplotlib" },
				    { label: "SciPt", slug: "python/45_scipy_fitting" },
          ]
        },
        // {
        //   label: 'Governance',
        //   items: [
        //     { label: "Code of Conduct", slug: "governance/21_CODE_OF_CONDUCT" },
        //     { label: "About", slug: "governance/22_about" },
        //     { label: "Contributing Guidelines", slug: "governance/23_CONTRIBUTING" },
        //     { label: "CAPIBARA Handbook", slug: "governance/24_CAPIBARA_HANDBOOK" },
        //     { label: "Privacy Policy", slug: "governance/25_PRIVACY_POLICY" },
        //   ]
        // },
        {
          label: 'Infrastructure',
          items: [
            { label: "Packages", slug: "infrastructure/46_packages" },
            { label: "Docker", slug: "infrastructure/47_docker" },
            { label: "Website", slug: "infrastructure/website"}
          ]
        }
			],
		}),
	],
});

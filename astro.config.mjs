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
            { label: "UNIX", slug: "coding/101_unix" },
            { label: "Terminal", slug: "coding/102_terminal" },
				    { label: "Git", slug: "coding/103_git" },
				    { label: "GitHub", slug: "coding/104_github" },
				    { label: "LaTeX", slug: "coding/105_local_latex" },
					],
				},
        {
          label: 'Python',
          items: [
            { label: "Environments", slug: "python/301_environments" },
            { label: "Running Code", slug: "python/302_running_pytho" },
            // { label: "Writing Code", slug: "python/303_python_basics" },
          ],
        },
        {
          label: 'Old-Python',
          items: [
				    { label: "Configuration", slug: "python/15_configuring_python_pip" },
				    { label: "Conda", slug: "python/31_conda_venv" },
				    { label: "Jupyter", slug: "python/41_jupyter_notebook" },
				    { label: "Conda", slug: "python/42_configuring_conda_venv" },
            { label: "NumPy & Pandas", slug: "python/43_numpy_pandas" },
				    { label: "Matplotlib", slug: "python/44_matplotlib" },
				    { label: "SciPt", slug: "python/45_scipy_fitting" },
          ],
        },
        {
          label: 'Governance',
          items: [
            { label: "Code of Conduct", slug: "governance/201_code_of_conduct" },
            { label: "About", slug: "governance/202_about" },
            { label: "Contributing", slug: "governance/203_contributing" },
            { label: "Handbook", slug: "governance/204_capibara_handbook" },
            { label: "Privacy Policy", slug: "governance/205_privacy_policy" },
          ],
        },
        {
          label: 'Infrastructure',
          items: [
            { label: "Packages", slug: "infrastructure/401_packages" },
            { label: "Website", slug: "infrastructure/402_website" },
            { label: "Documentation Maintenance", slug: "infrastructure/403_documentation" },
            // { label: "Docker", slug: "infrastructure/47_docker" },
          ],
        },
			],
		}),
	],
});

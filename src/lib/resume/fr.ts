export const resume = {
	name: 'Michael Lemiale',
	title: 'Staff Data Engineer',
	contact: {
		email: 'michael.lemiale@gmail.com',
		website: 'www.michael-lemiale.dev',
		phoneUS: '+1 240.281.9090',
		phoneFR: '+33 06 98 84 62 69',
		citizenship: 'Citoyen franco-américain'
	},
	summary:
		'Staff Data Engineer avec plus de 8 ans d\'expérience dans la conception de plateformes data scalables, la construction de pipelines de production et le leadership d\'équipes data performantes. Bilan éprouvé dans la consolidation d\'environnements de data warehouse complexes, la mise en place de bonnes pratiques CI/CD et le déploiement d\'infrastructures permettant aux organisations de prendre des décisions basées sur les données.',
	experience: [
		{
			company: 'Articulate',
			description:
				'Leader du marché de l\'e-learning, développant des applications de formation en ligne pour une clientèle mondiale incluant toutes les entreprises du Fortune 100.',
			roles: [
				{
					title: 'Staff Data Engineer',
					dates: 'Jan 2025 – Présent',
					bullets: [
						'Architecture et déploiement de pipelines **Dagster** sur **Kubernetes** avec **sling** et **Terraform**, streamant des millions de lignes par jour depuis PostgreSQL vers Snowflake — entièrement auto-hébergé et versionné',
						'Construction de pipelines d\'ingestion sur mesure avec **Dagster** et **dlt** pour extraire les données d\'APIs tierces et de services internes vers Snowflake',
						'Déploiement d\'une instance **Metabase** auto-hébergée, démocratisant l\'accès aux données pour les ingénieurs produit',
						'Livraison d\'**intégrations MCP** sur Omni, Snowflake et Metabase — permettant aux équipes d\'utiliser l\'IA pour interroger l\'infrastructure data',
						'Définition de la stratégie IA de l\'équipe data et représentation au comité de pilotage ingénierie'
					]
				},
				{
					title: 'Senior Data Engineer',
					dates: 'Jan 2023 – Jan 2025',
					bullets: [
						'Pilotage de la migration et consolidation de deux environnements data warehouse depuis **BigQuery** et **Redshift** vers **Snowflake**, améliorant la scalabilité et réduisant les temps de requête de 40%',
						'Mentorat de 3 analytics engineers et 2 data analysts, fournissant un accompagnement transversal sur les initiatives prioritaires',
						'Mise en place du framework CI/CD avec **GitHub Actions**, **Terraform** et **dbt**, standardisant les pratiques de déploiement',
						'Conception de pipelines incrémentaux ingérant des centaines de téraoctets depuis des dizaines d\'APIs et bases applicatives avec **Python**, **dlt**, **Dagster** et **sling**',
						'Construction d\'outillage de développement local rapide, réduisant le temps de mise en place à 20 minutes'
					]
				}
			]
		},
		{
			company: 'The Zebra',
			description:
				'Place de marché de comparaison d\'assurances en ligne basée à Austin, Texas — simplifiant la comparaison de devis auprès de plus de 200 assureurs.',
			roles: [
				{
					title: 'Senior Analytics Engineer',
					dates: 'Mai 2020 – Jan 2023',
					bullets: [
						'Direction de la transition vers une architecture modulaire du data warehouse, réduisant les coûts opérationnels **Snowflake** de 25%',
						'Co-conception d\'un framework de tests unitaires SQL avec l\'équipe Data Engineering, augmentant la confiance dans les déploiements',
						'Construction d\'un framework de tests de régression garantissant l\'intégrité des données historiques lors des déploiements'
					]
				},
				{
					title: 'Analytics Engineer II',
					dates: 'Mai 2018 – Mai 2020',
					bullets: [
						'Migration des modèles de données Looker vers **dbt**, réduisant les temps de build de 50% grâce aux stratégies de matérialisation incrémentale',
						'Automatisation des imports Excel manuels avec des pipelines scalables, éliminant 40 heures de travail manuel par mois',
						'Pilotage de la transition des outils ETL d\'Alooma vers **Fivetran**, rationalisant l\'ingestion de dizaines de sources'
					]
				}
			]
		},
		{
			company: 'Under Armour',
			description:
				'Géant américain du sportswear de 2,8 milliards de dollars, basé à Baltimore, Maryland.',
			roles: [
				{
					title: 'BI Developer',
					dates: 'Mai 2017 – Mai 2018',
					bullets: [
						'Construction et maintenance de modèles de données dans **SAP HANA**, supportant les initiatives BI critiques',
						'Création de jeux de données de reporting standardisés dans **Tableau** et **Business Objects**'
					]
				},
				{
					title: 'Data Analyst',
					dates: 'Nov 2016 – Mai 2017',
					bullets: [
						'Collaboration avec des consultants SAP ERP pour traduire les modèles legacy vers le nouvel environnement **SAP HANA**',
						'Construction de modèles de données single-source-of-truth et de hubs analytiques front-end'
					]
				}
			]
		}
	],
	education: {
		school: 'University of Maryland, College Park',
		dates: 'Août 2012 – Mai 2016',
		degrees: [
			'Bachelor of Science — Systèmes d\'Information',
			'Bachelor of Science — Finance'
		]
	},
	skills: {
		programming: 'SQL, Python, Go, JavaScript, TypeScript',
		frameworks:
			'dbt, Jinja, Fivetran, Stitch, sling, dlt, Dagster, Prefect, Airflow, Terraform, Kubernetes, GitHub Actions, GitLab Pipelines',
		cloud: 'AWS, GCP',
		analytics: 'Omni, Looker, Tableau, Power BI, Mode, Metabase',
		databases: 'Snowflake, Redshift, BigQuery, PostgreSQL, MySQL, SQL Server',
		languages: 'Anglais — Natif, Français — Courant, Espagnol — Avancé'
	}
};

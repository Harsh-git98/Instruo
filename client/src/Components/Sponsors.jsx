import React from 'react';
import './Sponsors.css';

const logos = [
	'Nodwin Gaming Logo.png',
	'Krafton Logo.jpg',
	'amul-logo.png',
	'B Natural logo.jpeg',
	'barista_logo.jpg',
	'bisleri_logo.png',
	'cafe-coffee-day-logo.png',
	'CESC_logo.png',
	'coal_india.avif',
	'edudite_logo.png',
	'Fleapo Logo.png',
	'Friends Pizza Logo.png',
	'GateForum Logo.jpeg',
	'LOreal-Symbol.jpg',
	'redFM logo.jpeg',
	'Wow Momo Logo.png'
];

const tidyName = (file) => {
	const base = file.replace(/\.[^.]+$/, '');
	if (/coal[_-]?india/i.test(base)) return 'Coal India Limited';
	const cleaned = base.replace(/[-_]/g, ' ')
		.replace(/\b(logo|symbol|limited|india)\b/gi, '')
		.trim();
	return cleaned.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

const Sponsors = () => {
	return (
		<section id="sponsors" className="sponsors-section" aria-labelledby="sponsors-heading">
			<div className="container">
				<h2 id="sponsors-heading" className="sponsors-title">OUR SPONSORS</h2>
				<p className="sponsors-sub">Trusted by industry leaders</p>
				<div className="sponsors-grid">
					{logos.map((file, i) => (
						<article key={i} className="sponsor-item" aria-label={tidyName(file)}>
							<img
								className="sponsor-logo"
								src={`/assets/logo/${file}`}
								alt={tidyName(file)}
								loading="lazy"
							/>
							<div className="sponsor-caption">{tidyName(file)}</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Sponsors;

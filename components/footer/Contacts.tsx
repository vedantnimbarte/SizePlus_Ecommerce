import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterContacts() {
	return (
		<>
			<h3 className="page-footer__header">Contact Us</h3>
			<p className="page-footer__icon-w-link">
				<span className="icon">
					<FontAwesomeIcon icon={faWhatsapp} />
				</span>
				<a className="link" href="tel:+919836669720">
					+91 983 666 9720
				</a>
			</p>
			<p className="page-footer__icon-w-link">
				<span className="icon">
					<FontAwesomeIcon icon={faMapMarkerAlt} />
				</span>
				<a className="link" href="#">
					Diamond Arcade, Room No 401/407, 4 th Floor, 68 Jessore
					Road, Kolkata-700055
				</a>
			</p>
			<p className="page-footer__icon-w-link">
				<span className="icon">
					<FontAwesomeIcon icon={faClock} />
				</span>
				9:00am &mdash; 6:00pm
			</p>
		</>
	);
}

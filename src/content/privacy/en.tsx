// src/content/privacy/en.tsx — Dimora del Funaro
import {
  A,
  ADDRESS_EN,
  BROWSER_LINKS,
  EMAIL,
  H2,
  H3,
  HAS_GOOGLE_ANALYTICS,
  HAS_GOOGLE_MAPS_EMBED,
  NAME,
  OL,
  P,
  SITE,
  UL,
} from './ui';

export function PrivacyEn() {
  return (
    <>
      <P>
        <em>
          This is an English translation provided for convenience. In case of any discrepancy, the Italian version
          prevails.
        </em>
      </P>

      <H2>1) About this website’s privacy policy</H2>
      <P>
        This section describes how the website {SITE} is managed with regard to the processing of personal data of the
        users who visit it.
      </P>
      <P>
        This notice is also provided pursuant to Articles 13 and 14 of Regulation (EU) 2016/679 on the protection of
        natural persons with regard to the processing of personal data and on the free movement of such data, for
        those who interact with “{NAME}”, reachable at the address corresponding to the home page {SITE}.
      </P>
      <P>
        This notice is also provided in accordance with the Italian Data Protection Authority’s cookie measure no. 229
        of 8 May 2014, in order to inform visitors about the use of the data they enter and of the cookies used by the
        website.
      </P>
      <P>
        This notice applies only to the website {SITE} and not to other websites the user may visit through links
        contained in it.
      </P>
      <P>
        The purpose of this document is to describe the methods, timing and nature of the information that data
        controllers must provide to users when they connect to the web pages of “{NAME}”, regardless of the purpose of
        the connection, in accordance with Italian and European law.
      </P>
      <P>
        Users under the age of sixteen, pursuant to Article 8(1) of Regulation (EU) 2016/679, must not make bookings
        or information requests without prior consent to the processing of their data given by the holders of
        parental responsibility.
      </P>
      <P>
        By using any of our services and/or accepting this notice (when registering for one of our services), the
        user consents to the collection and use of personal information as described in this notice.
      </P>

      <H2>2) Data controller</H2>
      <P>
        The data controller is “{NAME}”, located at {ADDRESS_EN}. Email: <A href={`mailto:${EMAIL}`}>{EMAIL}</A>.
      </P>

      <H2>3) Data processed</H2>
      <P>
        The controller processes personal identification data (for example: first name, last name, address, email and
        telephone number) when a contract with the accommodation is concluded or when information is requested.
      </P>

      <H2>4) Purposes and legal basis of processing</H2>
      <P>Data is processed for the following purposes:</P>
      <OL>
        <li>
          to acquire and confirm your booking of accommodation services, or related services you requested from the
          property. As this processing is necessary to enter into and perform the contract, your consent is not
          required. If you refuse to provide your personal data, the property will not be able to confirm the booking
          or provide the services requested;
        </li>
        <li>
          to comply with the obligation set out in the Italian Consolidated Law on Public Security (Article 109, Royal
          Decree no. 773 of 18 June 1931), which requires accommodation providers to report the personal details of
          their guests to the Police Headquarters (Questura) for public security purposes, in the manner set out in
          the Ministerial Decree of 7 January 2013. Providing this data is mandatory and does not require your
          consent; if you refuse to provide it, the property will not be able to host you;
        </li>
        <li>
          to comply with applicable administrative, accounting and tax obligations. For these purposes data is
          processed without the need for your consent. Data is processed by the controller or by persons specifically
          appointed by the controller. If you refuse to provide the data required for these obligations, the property
          will not be able to provide the services requested;
        </li>
        <li>
          to respond to booking requests and requests for information about your stay. To this end, the Contact page
          of the website contains a form through which you can send us your dates and requests, providing your first
          name, last name, email address and, optionally, telephone number. After obtaining your consent (by ticking
          the box confirming you have read the privacy notice), the property will contact you by email or telephone.
          The optional, explicit and voluntary sending of emails to the addresses shown on this website entails the
          subsequent acquisition of the sender’s address, which is needed to reply to requests, as well as of any
          other personal data included in the message.
        </li>
      </OL>

      <H2>5) Processing methods</H2>
      <P>
        Data will be processed by the controller or by specifically appointed persons (such as external processors)
        using procedures, technical and IT tools, or manual means suitable for protecting the confidentiality and
        security of the data subject’s data. Processing consists of collection, recording, organisation, storage,
        consultation, elaboration, modification, selection, extraction, comparison, use, interconnection, blocking,
        communication, disclosure, erasure and destruction, including a combination of two or more of these
        activities.
      </P>

      <H2>6) Retention periods</H2>
      <P>The data you provide:</P>
      <UL>
        <li>for purpose no. 1: will be kept until your departure;</li>
        <li>for purpose no. 2: is not kept by the property;</li>
        <li>
          for purpose no. 3: will be kept by the external processors (tax and accounting consultant) for the periods
          required by the relevant laws (10 years, or longer in the event of tax audits);
        </li>
        <li>for purpose no. 4: will be kept for as long as strictly necessary to provide the information requested.</li>
      </UL>
      <P>
        In any case, data will be deleted at the data subject’s request, subject to any further retention obligations
        required by law.
      </P>

      <H2>7) Access to data</H2>
      <P>Your data may be accessed by external consultants, credit institutions and supervisory and control authorities.</P>

      <H2>8) Data transfers</H2>
      <P>The data controller does not transfer personal data to third countries or international organisations.</P>

      <H2>9) Rights of the data subject</H2>
      <P>
        The data subject may exercise their rights under Article 15 of Regulation (EU) 2016/679 towards the data
        controller. In particular, the data subject may obtain confirmation as to whether or not personal data
        concerning them exists, even if not yet recorded, and its communication in an intelligible form.
      </P>
      <P>The data subject has the right to be informed of:</P>
      <UL>
        <li>the source of the personal data;</li>
        <li>the purposes and methods of processing;</li>
        <li>the logic applied when processing is carried out by electronic means;</li>
        <li>
          the persons or categories of persons to whom the personal data may be communicated or who may become aware
          of it as designated representative in the territory of the State, processors or persons in charge.
        </li>
      </UL>
      <P>The data subject has the right to obtain:</P>
      <UL>
        <li>the updating, rectification or, where of interest, completion of the data;</li>
        <li>
          the erasure, anonymisation or blocking of data processed unlawfully, including data whose retention is not
          necessary for the purposes for which it was collected or subsequently processed;
        </li>
        <li>
          certification that the operations described above have been notified, including as regards their content,
          to those to whom the data was communicated or disclosed, unless this proves impossible or involves a
          manifestly disproportionate effort compared with the right being protected.
        </li>
      </UL>
      <P>The data subject has the right to object to processing under the terms and conditions set out in the provisions above.</P>

      <H2>10) Changes to this notice</H2>
      <P>
        This notice may be amended in order to keep the data subject informed of any changes to the purposes for
        which the controller processes data, as well as of changes in privacy legislation. We therefore recommend
        always referring to the most recent version.
      </P>
      <P>
        For any further information, and to exercise the rights granted to you by data protection law, you may contact
        the data controller “{NAME}”, {ADDRESS_EN}, at the following email address:{' '}
        <A href={`mailto:${EMAIL}`}>{EMAIL}</A>.
      </P>

      <H2>Cookie policy</H2>

      <H3>What cookies are</H3>
      <P>
        A “cookie” is a small text file created on the user’s device when they visit a website, in order to store and
        carry information. Cookies are sent by a web server (the computer on which the visited website runs) to the
        user’s browser and stored on the user’s device; they are then sent back to the website on subsequent visits.
        While browsing, the user may also receive cookies from other websites (so-called “third-party” cookies), set
        directly by the operators of those websites and used for the purposes and in the ways they define.
      </P>

      <H3>Types of cookies used by this website</H3>
      <P>
        The website {SITE} uses technical cookies that are strictly necessary for the website to function and for
        browsing, for which, pursuant to Article 122 of the Italian Privacy Code and the Italian Data Protection
        Authority’s measure of 8 May 2014, no consent from the data subject is required. The website does not use
        profiling cookies.
      </P>

      {HAS_GOOGLE_MAPS_EMBED && (
        <P>
          The Contact page offers a map provided by Google Maps (Google Ireland Limited). The map is loaded only after the user explicitly clicks the “Show the map” button: until then, no data is sent to Google. Displaying the
          map may cause Google to set third-party cookies, which Google manages under its own privacy policy,
          available at <A href="https://policies.google.com/privacy">policies.google.com/privacy</A>. Alternatively, the property’s address is shown in full on the same page, together with a link to open it directly in Google Maps.
        </P>
      )}

      {HAS_GOOGLE_ANALYTICS && (
        <>
          <P>The website also uses third-party statistical cookies:</P>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-ink-muted">
              <thead>
                <tr className="border-b border-ink/20 text-espresso">
                  <th className="py-2 pr-4">Cookie</th>
                  <th className="py-2 pr-4">Type</th>
                  <th className="py-2 pr-4">Duration</th>
                  <th className="py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-ink/10">
                  <td className="py-2 pr-4">_ga</td>
                  <td className="py-2 pr-4">Statistical (third party)</td>
                  <td className="py-2 pr-4">2 years</td>
                  <td className="py-2">Google Analytics</td>
                </tr>
                <tr className="border-b border-ink/10">
                  <td className="py-2 pr-4">_gat</td>
                  <td className="py-2 pr-4">Statistical (third party)</td>
                  <td className="py-2 pr-4">1 minute</td>
                  <td className="py-2">Google Analytics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            This website uses Google Analytics, a web analytics service provided by Google. The information generated
            by the cookie about the use of the website (including the anonymised IP address) will be transmitted to and
            stored on Google’s servers, which will use it to evaluate the use of the website and compile reports on
            website activity for its operators.
          </P>
        </>
      )}

      <H3>Processing methods</H3>
      <P>Processing is carried out by the controller using automated tools. No disclosure or communication takes place.</P>

      <H3>Disabling cookies</H3>
      <P>
        Users can manage their cookie preferences directly in their browser and, for example, prevent third parties
        from installing them. Browser settings also allow users to delete cookies installed in the past. Please note
        that disabling all cookies may affect how this website works. Each browser has its own procedure for managing
        settings; specific instructions are available through the links below:
      </P>
      <UL>
        {BROWSER_LINKS.map((b) => (
          <li key={b.name}>
            <A href={b.href}>{b.name}</A>
          </li>
        ))}
      </UL>
      <P>
        For services provided by third parties, users may also exercise their right to object to tracking by
        consulting the third party’s privacy policy, by using the opt-out link where explicitly provided, or by
        contacting the third party directly. For information on the cookies stored on your device and to disable
        them individually, see: <A href="https://www.youronlinechoices.com/">www.youronlinechoices.com</A>.
      </P>

      <P>
        <em>Last updated: 11 October 2026.</em>
      </P>
    </>
  );
}

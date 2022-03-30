import React from "react";
import { Link } from "react-router-dom";
import "./Terms.scss";

export default function Terms() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center darkblue text-white">
        <h1 className="m-3">Terms and Conditions of Sale</h1>
      </div>
      <div className="terms mt-5">
        <div className="mb-5 mt-3">
          <h2>Raspberry Pi Ltd; Terms and Conditions of Sale</h2>
          <h4 className="mt-4">1. Definitions</h4>
          <p>
            The following definitions shall apply in these terms and conditions:
          </p>
          <p>
            <b>Company</b> means Raspberry Pi Ltd.
          </p>
          <p>
            <b>Conditions</b> means these terms and conditions.
          </p>
          <p>
            <b>Contract</b> means any contract between the Company and the
            Customer for the sale and purchase of any of the Supplies.
          </p>
          <p>
            <b>Customer</b> means the person(s) or company whose Order for any
            of the Supplies is accepted by the Company.
          </p>
          <p>
            <b>Goods</b> means any goods (including any Software) supplied or to
            be supplied by the Company to the Customer.
          </p>
          <p>
            <b>Order</b> means the Customer’s order for the purchase of any of
            the Supplies by the Company as set out in the Company’s order form,
            the Customer’s written acceptance of the Company’s quotation, or
            placed via telephone, email or in writing.
          </p>
          <p>
            <b>Product</b> means any product in the latest issue of the
            Raspberry Pi Wholesale Price List or any product covered by a
            individual quotation from the company
          </p>
          <p>
            <b>Services</b> means any services supplied or to be supplied by the
            Company to the Customer.
          </p>
          <p>
            <b>Software</b> means any software identified in an Order, which,
            along with the applicable EULA, shall also reference the scope of
            use, duration of use and the number of users provided for under any
            such software.
          </p>
          <p>
            <b>Supplies</b> means any Goods and/or Services.
          </p>
          <p>
            <b>VAT</b> means United Kingdom value added tax or any similar sales
            tax imposed in any other jurisdiction.
          </p>
          <p>
            <b>Workin</b> days” means Monday to Friday
          </p>
          <p>
            Any reference within these Conditions to: “in writing” includes
            electronic communications
          </p>{" "}
          <h4>2. Business customers</h4>
          <p>
            The Company is a business to business supplier. By ordering, the
            Customer confirms that it wishes to obtain the Supplies for the
            purposes of his, her or its business and not as a consumer.
          </p>
          <h4>3. Conditions</h4>
          <p>
            All Orders are accepted by the Company subject to and in accordance
            with these Conditions
          </p>
          <p>
            If there is any conflict between:any other provisions of Company and
            these Conditions; or the provisions of any Customer Order and these
            Conditions, then these Conditions will prevail unless the Company
            agrees otherwise in writing.
          </p>
          <p>
            {"a)"} Together with any terms accepted by the Company in connection
            with an Order these Conditions constitute the entire agreement
            between the Company and the Customer in relation to any of the
            Supplies ordered. No variation to these Conditions is permitted
            unless expressly authorised in writing by a director of the Company.
          </p>
          <p>
            {"b)"} In the event the Company agrees to sell any Software products
            to the Customer then these are likely to be subject to separate
            conditions, outlined at the time.
          </p>
          <h4>4. New accounts and Orders</h4>
          <p>
            A Customer wishing to open a credit account must furnish such
            information as may be requested by the Company. The Company reserves
            the right in its absolute discretion to grant, refuse or discontinue
            any credit facilities or reduce or suspend any credit limit at any
            time.
          </p>
          <p>
            The Company reserves the right to decline to trade with any company
            or person.
          </p>
          <h4>5. Delivery</h4>a{")"} The Customer may request delivery to be
          made against a future schedule, any changes the customer wants to make
          to the scheduled requirements must be agreed in writing by the
          Company.
          <p></p>b{")"} Delivery will be made to the address specified by the
          Customer.
          <p></p>c{")"} All orders are non-cancellable unless agreed in writing
          by the company
          <p></p>d{")"} The Company may use any method of delivery available to
          it. The Company will use reasonable endeavours to meet delivery and/or
          performance estimates but, except as set out in Condition 7 below, in
          no circumstances shall it be liable to compensate the Customer for
          non-delivery, non-performance or late delivery or performance.
          <p></p>e{")"} Time for delivery and/or performance will not be of the
          essence and the Company reserves the right to delay despatch for a
          number of reasons, including to perform any necessary credit or
          anti-fraud checks or procedures or to ensure that payment in full has
          been received in cleared funds. Where despatch is delayed for such
          reasons, the Company will use reasonable endeavours to inform the
          Customer
          <h4>6. Inspection, defects and non-delivery</h4>
          <p>
            a{")"} The Customer must inspect any Goods as soon as is reasonably
            practicable after delivery. The Company shall not be liable for any
            defect in any of the Supplies unless written notice is given to the
            Company within 4 working days of the date of delivery.
          </p>
          <p>
            b{")"} The Company will not be liable for any non-delivery of Goods
            unless written notice is given to the Company within 4 working days
            of the date when Goods should have been delivered. Subject to
            Condition 14.1 below, the liability of the Company for non-delivery
            or non-performance or for Goods notified as defective on delivery
            will be limited to replacing the defective within a reasonable time
            or to refunding the price paid in respect of such defective Goods.
          </p>
          <h4>7. Prices</h4>
          <p>
            a{")"} Prices for Goods are in the currency quoted on the Price List
            or individual quotation and are exclusive of VAT. The Company has
            used all reasonable endeavours to ensure that prices for Goods are
            accurately set out in the Price List but reserves the right to
            change its prices without notice at any time. Prices charged will be
            those prevailing when an Order is accepted unless the order is
            placed for a forward schedule in which case the Company has the
            right to charge the price in effect at the point of shipment.
          </p>
          <p>
            b{")"} All sums payable by the Customer in accordance with these
            Conditions are exclusive of VAT. Where any Supplies are provided by
            the Company to the Customer that are subject to VAT, the Customer
            shall pay an amount equal to such VAT to the Company and the Company
            shall (where required by applicable laws{")"} issue an appropriate
            VAT invoice to the Customer.
          </p>
          <h4>8. Payment</h4>
          <p>
            a{")"} Subject to Condition 9.2, payment is usually due not later
            than 30 days from the date of the invoice.
          </p>
          <p>
            b{")"} Invoices will be sent electronically to the email address
            provided.
          </p>
          c{")"} The Company reserves the right to request payment in advance in
          specific circumstances communicated from time to time by the Company
          to the Customer. d{")"} Time for payment is of the essence. If the
          Customer fails to make payment by the due date then, without prejudice
          to any other right or remedy, the Company shall be entitled to: cancel
          the Order or suspend any further deliveries or performance;
          appropriate any payment made by the Customer to such of the Supplies
          (or any of the Supplies made under any other contract{")"} as the
          Company may think fit; and charge interest (both before and after any
          judgment{")"} on the amount unpaid at the rate of 5% per annum above
          the base rate from time to time of HSBC Bank plc from the due date of
          payment until payment is made. 9. Returns a{")"} Returns will normally
          only be agreed in the event that a product supplied by the company is
          considered faulty b{")"} Prior to returning any Goods to the Company
          for any reason, the Customer must contact the Company to obtain a
          returns material authorisation number (‘RMA’{")"}. c{")"} All Goods
          are returned at the Customer’s risk and expense and should be
          undamaged and in their original packaging (if applicable{")"}. The
          Customer is responsible for returning Goods to the Company and for
          providing proof of delivery of such return.
          <h4>10. Description</h4>a{")"} All specifications, drawings,
          illustrations, descriptions and particulars of weights, dimensions,
          capacity or other details including, without limitation, any
          statements regarding compliance with legislation or regulation
          (together “Descriptions”{")"} wherever they appear are intended to
          give a general idea of the Supplies, but will not form part of the
          Contract.
          <h4>11. Risk and ownership</h4>
          The risk of damage to or loss of Goods will pass to the Customer when
          the goods are unloaded from the Company’s carriers at the Customer’s
          premises unless different terms are agreed in advance Title in the
          Goods a{")"} Ownership of the Goods shall not pass to the Customer
          until the Company has received in full (in cash or cleared funds{")"}{" "}
          all sums due from the Customer to the Company on any account
          whatsoever. If payment is not received in full by the due date, or the
          Customer passes a resolution for winding up or a court shall make an
          Order to that effect, or a receiver or administrator is appointed over
          any assets or the undertaking of the Customer or an execution or
          distress is levied against the Customer, the Company shall be
          entitled, without previous notice, to retake possession of the Goods
          and for that purpose to enter upon any premises occupied or owned by
          the Customer.
          <h4>12. Warranty/Guarantee</h4>
          <p>
            The Company warrants the goods against defects for a period of 12
            months from delivery of the goods to the customer. In addition,
            subject to Condition 13.2 below, the Company will, free of charge,
            repair or, at the Company’s option, replace Goods which are proved
            to the reasonable satisfaction of the Company to be damaged or
            defective due to faulty materials, workmanship or design. However,
            this obligation will not apply:
          </p>
          <p>
            a{")"} if the defect arises because the Customer (or the end
            customer in the event the product is re-sold{")"} has altered or
            repaired such Goods without the written consent of the Company;
          </p>
          <p>
            b{")"} because the Customer did not follow the manufacturer’s
            instructions for storage, usage, installation or maintenance of the
            Goods;
          </p>
          <p>
            c{")"} if the Customer has failed to notify the Company of any
            defect in accordance with Condition 7 where the defect should have
            been reasonably apparent on reasonable inspection; or
          </p>
          <h4>13. Exclusion of Liability</h4>
          <p>
            a{")"} The Company does not exclude its liability to the Customer:
          </p>
          <p>
            for breach of the Company’s obligations under section 12 of the Sale
            of Goods Act 1979 or section 2 of the Supply of Goods and Services
            Act 1982;
          </p>
          <p>
            for personal injury or death arising as a result of the Company’s
            negligence;
          </p>
          <p>under section 2(3{")"} of the Consumer Protection Act 1987;</p>
          <p>
            for any matter which it would be illegal for the Company to exclude
            or to attempt to exclude its liability; or
          </p>
          <p>for fraud or fraudulent misrepresentation.</p>
          <p>
            b{")"} Except as provided in Conditions 7 (Inspection, defects and
            non-delivery{")"}, and 13 (Warranty/Guarantee{")"}, the Company will
            be under no liability to the Customer whatsoever (whether in
            contract, tort, (including negligence{")"}, breach of statutory
            duty, restitution or otherwise{")"} for any injury, death, damage or
            direct loss or pure economic loss, loss of profits, loss of
            business, loss of use, loss of data, computer downtime, depletion of
            goodwill, business interruption, increased purchasing or
            manufacturing costs, loss of opportunity, loss of contracts and like
            loss or for any loss or damage which is not a reasonably foreseeable
            result of any breach of these Conditions howsoever caused or arising
            out of or in connection with:
          </p>
          <p>
            c{")"} Save as set out in Condition 14.1 the Company’s total
            liability in contract, tort, (including negligence{")"}, breach of
            statutory duty, misrepresentation or otherwise shall be limited to
            repairing or replacing Goods or in the case of Services,
            re-performing the Services or, at the Company’s option, refunding
            monies
          </p>
          <h4>14. Intellectual property rights</h4>
          <p>
            The Company owns full intellectual and industrial property rights
            including patents, knowhow, trademarks, copyright, design rights in
            respect of product branded “Raspberry Pi”.
          </p>
          <p>
            a{")"} All information concerning or embedded in the Products is
            confidential and is Raspberry Pi’s proprietary information
            (“Proprietary Information”{")"} whether or not such information is
            marked as Proprietary Information. The Proprietary Information
            includes commercially valuable, substantial trade secrets, the
            design and development of which reflect the effort of skilled
            development experts and investment of considerable amounts of time
            and money.
          </p>
          <p>
            b{")"} Customer acknowledges that any use or threatened use of the
            Products in a manner inconsistent with this Agreement or other
            misuse of the Proprietary Information of Raspberry Pi will cause
            immediate irreparable harm to Raspberry Pi for which there is no
            adequate remedy of law. Accordingly, Customer agrees that Raspberry
            Pi shall be entitled to immediate and permanent injunctive relief
            from a court of competent jurisdiction in the event of any such
            breach by Customer.
          </p>
          <p>
            c{")"} Nothing contained herein shall limit Raspberry Pi’s right to
            any remedies of law, including the recovery of damages from Customer
            from breach of this Agreement. The obligations set forth in this
            paragraph shall not apply to the extent that such information: (i
            {")"} is or becomes available in the public domain other than by the
            Customer; or (ii{")"} is known or becomes known by Customer
            independent from any disclosure by Raspberry Pi.
          </p>
          <p>
            d{")"} Reverse Engineering and Decompilation. Customer may not
            modify, disassemble, reverse engineer, analyze, or decompile any
            part of the Products in any circumstances
          </p>
          <p>
            Other product sold may be subject to the intellectual and industrial
            property rights including patents, knowhow, trademarks, copyright,
            design rights utility rights, database rights and or other rights of
            third parties. No right or licence is granted to the Customer,
            except the right to use the Supplies or re-sell the Goods in the
            Customer’s ordinary course of business
          </p>
          <h4>15. Use of Personal Data</h4>
          <p>
            The Company processes personal data in accordance with the
            applicable personal data laws.
          </p>
          <h4>16. Export</h4>
          <p>
            The Goods, including any software, documentation, and any related
            technical data included with, or contained in, such Goods, and any
            products utilising any such Goods, software, documentation, or
            technical data (collectively, “Regulated Goods”{")"} may be subject
            to export control laws and regulations of the United States, the
            United Kingdom, and/or other countries (“Export Laws”{")"}. The
            Customer shall not, and shall not permit any third parties to,
            directly or indirectly, export, re-export, or release any Regulated
            Goods to any jurisdiction or country to which, or any party to whom,
            the export, re-export, or release of any Regulated Goods is
            prohibited by Export Laws, including sanctions or embargoes
            administered by the United States Government, the United Kingdom
            Government, or any other applicable government authority. The
            Customer shall comply with all applicable Export Laws, and shall
            complete all required undertakings (including obtaining any
            necessary export licence or other government approval{")"}, prior to
            exporting, re-exporting, or releasing any Regulated Goods.
          </p>
          <h4>17. Prohibited Applications</h4>
          <p>
            The Goods are not designed, authorised or warranted to be suitable
            for use in anti-personnel landmines, nuclear facilities or weapons,
            chemical or biological weapons, missile technology, space or
            aircraft or air traffic applications, life support or life
            sustaining equipment, surgical implantation equipment or for any
            other purpose where the failure or malfunction of the Goods could
            reasonably be expected to result in personal injury, death, severe
            property or environmental damage. Use or inclusion of the Goods in
            any such equipment, system or applications is strictly prohibited
            (unless the Company agrees in writing that such prohibition does not
            apply to a particular product{")"} and any such use will be at the
            Customer’s own risk. The Customer will indemnify the Company and its
            suppliers against any and all liability and expense (including costs
            {")"} resulting from any such inclusion or use.
          </p>
          <h4>18. Legal construction</h4>
          <p>
            All Contracts and non-contractual disputes shall be governed by and
            interpreted in accordance with English law and the Customer submits
            to the jurisdiction of the English Courts, but the Company may
            enforce such Contract in any court of competent jurisdiction.
          </p>
          <p>
            <b>
              These Conditions supersede all previous issues. Issued April 2017
            </b>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

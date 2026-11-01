from fpdf import FPDF


class Resume(FPDF):
    def footer(self):
        self.set_y(-12)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 8, f"{self.page_no()}", align="C")

    def section(self, title):
        self.ln(2)
        self.set_font("Helvetica", "B", 11)
        self.set_text_color(20, 60, 120)
        self.cell(0, 7, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(20, 60, 120)
        self.set_line_width(0.4)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(2)
        self.set_text_color(30, 30, 30)

    def body(self, text):
        self.set_font("Helvetica", "", 9)
        self.multi_cell(0, 4.2, text)
        self.ln(0.5)

    def bullet(self, text):
        self.set_font("Helvetica", "", 9)
        self.set_x(self.l_margin)
        bullet = "-"
        self.cell(4, 4.2, bullet)
        self.multi_cell(0, 4.2, text)

    def job(self, role, dates, company):
        self.set_font("Helvetica", "B", 9.5)
        w = self.w - self.l_margin - self.r_margin
        self.cell(w * 0.68, 5, role)
        self.set_font("Helvetica", "", 9)
        self.cell(w * 0.32, 5, dates, align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_font("Helvetica", "I", 9)
        self.set_text_color(70, 70, 70)
        self.cell(0, 4.5, company, new_x="LMARGIN", new_y="NEXT")
        self.set_text_color(30, 30, 30)


def main():
    pdf = Resume(format="A4")
    pdf.set_auto_page_break(auto=True, margin=14)
    pdf.set_margins(14, 12, 14)
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 18)
    pdf.set_text_color(15, 40, 90)
    pdf.cell(0, 8, "ANIL KUMAR PILLAI", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(30, 30, 30)
    pdf.cell(
        0,
        5.5,
        "Senior DevOps & Infrastructure Engineer | Observability · SRE · Kubernetes · AIOps Agents",
        align="C",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(50, 50, 50)
    pdf.cell(
        0,
        4.5,
        "Leicester, UK  |  +44 7717 123234  |  anilkp787@gmail.com",
        align="C",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.cell(
        0,
        4.5,
        "anilkp.com  |  linkedin.com/in/anil-kumar-pillai-b8512322b",
        align="C",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.set_text_color(30, 30, 30)

    pdf.section("PROFESSIONAL SUMMARY")
    pdf.body(
        "Senior infrastructure and SRE engineer with 7+ years of hands-on cloud, Kubernetes and observability engineering, "
        "built on 14 years running mission-critical Linux, VMware and network infrastructure for the Indian Air Force. Currently "
        "the DevOps & SRE lead for a PCI-DSS payments platform at NEXT UK. There I built centralised observability "
        "(Prometheus, Grafana, ELK) that cut MTTR from 4 hours to under 1.5 hours, and I lead incident response, root-cause "
        "analysis and ServiceNow change management. I also led the migration of 200+ servers to Azure with zero downtime. "
        "Certified Kubernetes Administrator (CKA) and Azure Solutions Architect / DevOps Engineer Expert. I build AI-powered "
        "operational agents: Model Context Protocol (MCP) servers that let AI agents run operational health checks, and a multi-"
        "agent RAG platform in production."
    )

    pdf.section("CORE SKILLS")
    skills = [
        (
            "Observability & SRE: ",
            "Prometheus, Grafana, ELK Stack, Dynatrace; metrics, logs, dashboards, alerting and service-health visibility; incident response, root-cause analysis, capacity planning, performance optimisation",
        ),
        (
            "AI for Operations: ",
            "AI agents for operational automation, Model Context Protocol (MCP) servers, CrewAI multi-agent systems, RAG and vector search, LLM integration, Python",
        ),
        (
            "CI/CD & Build: ",
            "Jenkins (Groovy pipelines), Azure DevOps (YAML), GitHub Actions, Git, ArgoCD (GitOps), Helm, Azure Artifacts / Universal Packages, SonarQube, Veracode",
        ),
        (
            "Containers & Orchestration: ",
            "Kubernetes (AKS, EKS, self-managed kubeadm clusters), Docker, Helm, Azure Container Apps, ACR, Kafka, Redis",
        ),
        (
            "Infrastructure as Code & Config: ",
            "Terraform, Ansible, Ansible Automation Platform (AAP), golden images, PowerShell, Python, Bash, Groovy",
        ),
        (
            "Cloud, Virtualisation & Hybrid: ",
            "VMware virtualisation, RHEL/Oracle Linux; Azure (AKS, ACA, App Gateway, APIM, Key Vault, VNets, Private Endpoints, VMSS, Functions), AWS (EKS, EC2, ELB, IAM), OCI; hybrid on-prem-to-cloud connectivity (VPN, IBM MQ via APIM)",
        ),
        (
            "DevSecOps & Compliance: ",
            "PCI-DSS, Defender for Cloud, RBAC, Key Vault secrets management, SAST in pipelines (SonarQube, Veracode), TLS/cipher hardening, SELinux",
        ),
        (
            "Ways of Working: ",
            "ServiceNow and Jira (incident, change and problem management), ITIL, runbooks and operational documentation, HLD/LLD design, knowledge transfer, Agile",
        ),
    ]
    for label, text in skills:
        pdf.set_font("Helvetica", "B", 9)
        pdf.write(4.2, label)
        pdf.set_font("Helvetica", "", 9)
        pdf.write(4.2, text)
        pdf.ln(4.6)

    pdf.section("PROFESSIONAL EXPERIENCE")
    pdf.job(
        "Senior Cloud DevOps & SRE Architect, Payments Platform",
        "Sep 2023 - Present",
        "NEXT Technologies UK | Leicester, United Kingdom",
    )
    for b in [
        "Led the discovery and migration of 200+ on-premises servers (Production, Pre-Prod, UAT) to Azure for a payments platform serving Worldpay, Barclays, PayPal, Tabby and Tamara, with zero downtime and full PCI-DSS compliance.",
        "Worked with Solution, Domain, Application and Security architects to deliver the HLD and the DevOps LLD, covering networking, App Gateway, APIM fronting IBM MQ, Key Vault, hybrid connectivity, automation, observability and access control.",
        "Moved legacy VM workloads onto Azure Kubernetes Service (AKS) and Azure Container Apps (ACA), giving containerised microservices faster, repeatable deployments and horizontal scalability.",
        "Ran a POC and then migrated CI build agents from VMSS to ACA. Infrastructure cost fell by about 70% and average build time by 35%, thanks to on-demand, elastic agents.",
        "Built centralised observability with Prometheus, Grafana and ELK, cutting MTTR from 4 hours to under 1.5 hours and catching payment-system anomalies earlier. Also built a PowerShell Azure Function health dashboard for the Pre-Prod estate.",
        "Troubleshot across the full stack: traced a TLS 1.0 fallback to Group Policy cipher-suite settings, fixed asymmetric routing between VMs and APIM, and resolved corporate SSL-proxy certificate failures inside Azure DevOps pipelines.",
        "Standardised Terraform and Ansible (AAP) blueprints and Azure DevOps CI/CD templates. This removed configuration drift, enforced golden images and made environments fast to replicate, with pipelines kept in a healthy, production-ready state.",
        "Owned the change-management lifecycle for production releases through ServiceNow, coordinating Release, Development and Security teams to ship releases without service interruption and with rollback plans in place.",
    ]:
        pdf.bullet(b)

    pdf.job(
        "Lead - Cloud Infrastructure (DevOps)",
        "Sep 2022 - Aug 2023",
        "UST Global | Thiruvananthapuram, India",
    )
    for b in [
        "Maintained and evolved the Azure DevOps architecture for the NEXT e-commerce payments ecosystem.",
        "Automated IaaS/PaaS provisioning and set up secure connectivity models (site-to-site VPN, Private Endpoints).",
        "Built CI/CD pipelines with SonarQube and Veracode security scanning as quality gates, plus PowerShell automation for operational tasks.",
    ]:
        pdf.bullet(b)

    pdf.job(
        "Lead DevOps / Database Administrator",
        "Apr 2022 - Sep 2022",
        "Kerala State IT Mission | Thiruvananthapuram, India",
    )
    for b in [
        "Architected and deployed the DIGIT e-Governance platform, handling 2M+ digital transactions a month at 99.9% uptime, on Kubernetes, Docker, Kafka, Redis, Helm, Jenkins and Ansible.",
        "Designed and ran the Aadhaar Vault infrastructure with HSM integration and strict regulatory compliance.",
        "Helped move the platform from a monolith to microservices, with automated Jenkins deployments on AWS.",
        "Ran database administration and performance tuning, and used system metrics to find and remove bottlenecks before they caused outages.",
    ]:
        pdf.bullet(b)

    pdf.job(
        "Principal Consultant",
        "Sep 2019 - Mar 2022",
        "ITDOCK Technologies Pvt Ltd | Thiruvananthapuram, India",
    )
    for b in [
        "Designed and deployed multi-tenant Kubernetes SaaS environments on AWS for ERP and Harbour management systems.",
        "Built Terraform automation, highly available Redis and Kafka clusters with automatic failover, and observability stacks.",
    ]:
        pdf.bullet(b)

    pdf.job(
        "Infrastructure Engineer",
        "Aug 2005 - Aug 2019",
        "Indian Air Force | New Delhi, India",
    )
    for b in [
        "Ran RHEL 6/7 estates and core services (HTTP, FTP, Samba, SMTP), including clustering, disaster recovery and security compliance, for mission-critical defence systems.",
        "Hardened systems with iptables, firewalld and SELinux, set up OS-level load balancing for high availability, and administered LVM, LDAP and VMware.",
        "Introduced preventive maintenance for communication systems that raised uptime by over 30%, and deployed secure network infrastructure across multiple units.",
    ]:
        pdf.bullet(b)

    pdf.section("AI ENGINEERING & AUTOMATION PROJECTS")
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.cell(
        0,
        5,
        "Founder & Lead Engineer, MindGrid AI - GridLab Technologies",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    for b in [
        "Built a WhatsApp-based AI tutoring platform for CBSE Classes 9-12 on a CrewAI multi-agent architecture, with retrieval-augmented generation (RAG) over a vectorised curriculum.",
        "Integrated Twilio WhatsApp messaging and Razorpay payments, and wrote a patent draft for a curriculum-anchored RAG system that uses Bloom's Taxonomy metadata.",
        "Run the production stack (MongoDB, Redis, Nginx) on Azure with Docker Compose and Prometheus/Grafana monitoring. Moved it off Kubernetes to match platform cost to workload size.",
    ]:
        pdf.bullet(b)

    pdf.set_font("Helvetica", "B", 9.5)
    pdf.cell(
        0,
        5,
        "MCP Servers for SRE Automation - Personal R&D",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.bullet(
        "Building Model Context Protocol (MCP) servers hosted on Azure Container Apps that let AI agents run SRE tooling. The first is a DNS/HTTP health-check server; next is a CSV-driven Azure DevOps-to-GitHub repository migration tool."
    )

    pdf.section("CERTIFICATIONS")
    for b in [
        "Certified Kubernetes Administrator (CKA) - CNCF · KCNA - CNCF · CKAD in progress (Kubestronaut path)",
        "Microsoft Azure Solutions Architect Expert (AZ-305) · DevOps Engineer Expert (AZ-400) · Administrator (AZ-104)",
        "Advanced Certification in DevOps & Cloud Computing - IIT Madras · ITIL Foundation · OCI Foundations · IBM Cybersecurity",
        "Linux System Administration (RHEL) - CMC Ltd · Oracle 10g RAC & Data Guard - HCL",
    ]:
        pdf.bullet(b)

    pdf.section("EDUCATION")
    edu = [
        ("MSc Computer Science - Woolf University (Scaler Neoversity)", "In progress"),
        ("Master of Computer Applications (MCA) - Shobhit University, Meerut", "2014"),
        ("Bachelor of Computer Applications (BCA) - EIILM University, Sikkim", "2011"),
    ]
    for left, right in edu:
        pdf.set_font("Helvetica", "", 9)
        w = pdf.w - pdf.l_margin - pdf.r_margin
        pdf.cell(w * 0.78, 4.5, left)
        pdf.cell(w * 0.22, 4.5, right, align="R", new_x="LMARGIN", new_y="NEXT")

    out = r"e:\gitrepos\anilkp-web\public\resume.pdf"
    pdf.output(out)
    print("Wrote", out)


if __name__ == "__main__":
    main()

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      const whatsappMessage = formatWhatsAppMessage(
        name,
        email,
        phone,
        subject,
        message,
      );

      const whatsappNumber = "5548999114020";

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappURL, "_blank");
      showSuccessMessage();
    });
  }

  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");

      if (value.length <= 11) {
        if (value.length <= 2) {
          value = value.replace(/^(\d{0,2})/, "($1");
        } else if (value.length <= 6) {
          value = value.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
        } else if (value.length <= 10) {
          value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else {
          value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
        }
      }

      e.target.value = value;
    });
  }
});

function formatWhatsAppMessage(name, email, phone, subject, message) {
  const subjectLabels = {
    psicanalise: "Atendimento Psicanalítico",
    psicopedagogia: "Psicopedagogia",
    orientacao: "Orientação de Pais",
    online: "Atendimento Online",
    informacoes: "Informações Gerais",
    outro: "Outro",
  };

  const subjectText = subjectLabels[subject] || subject;

  return `*Nova mensagem do site - Beatriz Conradt*

*Nome:* ${name}
*E-mail:* ${email}
*Telefone:* ${phone}
*Assunto:* ${subjectText}

*Mensagem:*
${message}`;
}

function showSuccessMessage() {
  const successDiv = document.createElement("div");
  successDiv.className = "success-message";
  successDiv.innerHTML = `
        <div class="success-content">
            <span class="success-]">✓</span>
            <p><strong>Mensagem enviada com sucesso!</strong></p>
            <p>Você será redirecionado para o WhatsApp.</p>
        </div>
    `;

  successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem 3rem;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        text-align: center;
        animation: slideIn 0.3s ease;
    `;

  document.body.appendChild(successDiv);
  if (!document.getElementById("success-animation")) {
    const style = document.createElement("style");
    style.id = "success-animation";
    style.textContent = `
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translate(-50%, -60%);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
            }
            .success-icon {
                display: inline-block;
                width: 60px;
                height: 60px;
                background: #61b0c7;
                color: white;
                border-radius: 50%;
                font-size: 2rem;
                line-height: 60px;
                margin-bottom: 1rem;
            }
            .success-content p {
                margin: 0.5rem 0;
                color: #333;
                font-size: 1.1rem;
            }
        `;
    document.head.appendChild(style);
  }

  // Remove after 3 seconds
  setTimeout(() => {
    successDiv.style.animation = "slideOut 0.3s ease";
    setTimeout(() => {
      document.body.removeChild(successDiv);
    }, 300);
  }, 3000);
}

const style = document.createElement("style");
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -40%);
        }
    }
`;
document.head.appendChild(style);

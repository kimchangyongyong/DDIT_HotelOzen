package kr.or.ddit.global.common.error.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/error")
public class ErrorController {
	@GetMapping("/403")
	public String error403UI(HttpSession session, Model model) {
		String errorMessage = (String) session.getAttribute("errorMessage");
		model.addAttribute("errorMessage", errorMessage);
		session.removeAttribute("errorMessage");
		
		return "error/403";
	}

	@GetMapping("/404")
	public String error404UI(HttpSession session, Model model) {
		String errorMessage = (String) session.getAttribute("errorMessage");
		model.addAttribute("errorMessage", errorMessage);
		session.removeAttribute("errorMessage");
		
		return "error/404";
	}

}

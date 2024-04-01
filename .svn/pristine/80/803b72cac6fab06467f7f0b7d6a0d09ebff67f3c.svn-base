package kr.or.ddit.cstmr.rsvt.controller;

import java.util.HashMap;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.or.ddit.cstmr.rsvt.service.CstmrRsvtRetrieveService;
import kr.or.ddit.global.security.MberUser;
import kr.or.ddit.global.vo.MberVO;
import kr.or.ddit.global.vo.RsvtVO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/cstmr/rsvt")
public class CstmrRsvtRetrieveController {

	@Inject
	private CstmrRsvtRetrieveService service;

	@GetMapping
	public String rsvtList() {
		return "cstmr/rsvt/rsvtList";
	}

	@PostMapping
	public String rsvtList(HttpServletRequest request, Model model) {
		HttpSession session = request.getSession();

		Map<String, Object> rsvtData = new HashMap<>();
		String cstHp = request.getParameter("cstHp");
		String rsvtNo = request.getParameter("rsvtNo");

		rsvtData.put("cstHp", cstHp);
		rsvtData.put("rsvtNo", rsvtNo);

		RsvtVO nberRsvt = service.retrieveNberRsvt(rsvtData);
		log.info("nberRsvt@@@:{}", nberRsvt);

		model.addAttribute("nberRsvt", nberRsvt);

		return "redirect:rsvtList";
	}

	@GetMapping("{rsvtNo}")
	public String rsvtView(@PathVariable String rsvtNo) {
		return "cstmr/rsvt/rsvtView";
	}
}

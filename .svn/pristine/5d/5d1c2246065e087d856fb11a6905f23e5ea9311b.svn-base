package kr.or.ddit.emp.pms.stay.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import kr.or.ddit.emp.pms.stay.service.EmpPmsStayChkinListService;
import kr.or.ddit.global.common.paging.BootstrapFormBasePaginationRenderer;
import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.common.paging.PaginationRenderer;
import kr.or.ddit.global.common.paging.SearchCondition;
import kr.or.ddit.global.vo.RsvtVO;

@Controller
@RequestMapping("/emp/pms/stay")
public class EmpPmsStayChkinListControlelr {

	@Inject
	private EmpPmsStayChkinListService service;
	
	@RequestMapping(value="/checkinList.do", method = {RequestMethod.GET, RequestMethod.POST})
	public String stayChkinList(
		@RequestParam(value="page", required = false, defaultValue = "1") int currentPage
		, Model model	
		, @ModelAttribute("simpleCondition") SearchCondition simpleCondition
	) {
		PaginationInfo paging = new PaginationInfo();
		paging.setCurrentPage(currentPage);
		paging.setSimpleCondition(simpleCondition);
		
		
		List<RsvtVO> chkinList = service.retrieveChkinList(paging);
		model.addAttribute("chkinList",chkinList);
		
		PaginationRenderer renderer = new BootstrapFormBasePaginationRenderer("#searchForm");
		String pagingHTML = renderer.renderPagination(paging);
		model.addAttribute("pagingHTML",pagingHTML);
		
		return "emp/pms/stay/checkInList";
	}

}

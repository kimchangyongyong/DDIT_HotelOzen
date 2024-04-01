package kr.or.ddit.emp.pms.fxtrs.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import kr.or.ddit.emp.pms.fxtrs.service.EmpPmsFxtrsUseService;
import kr.or.ddit.global.common.paging.BootstrapFormBasePaginationRenderer;
import kr.or.ddit.global.common.paging.PaginationInfo;
import kr.or.ddit.global.common.paging.PaginationRenderer;
import kr.or.ddit.global.common.paging.SearchCondition;
import kr.or.ddit.global.vo.FxtrsUseVO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("emp/pms/fxtrs")
public class EmpPmsFxtrsUseController {

	@Inject
	private EmpPmsFxtrsUseService service;
	 
	@RequestMapping(value="/useList.do", 
			method = {RequestMethod.GET, RequestMethod.POST}) //비품 사용 내역 리스트
	public String fxtrsUse(
		@RequestParam(value="page", required = false, defaultValue = "1") int currentPage
		, Model model	
		, @ModelAttribute("simpleCondition") SearchCondition simpleCondition	
	) {
		PaginationInfo paging = new PaginationInfo();
		paging.setCurrentPage(currentPage);
		paging.setSimpleCondition(simpleCondition);
		
		List<FxtrsUseVO> fxtrsUseList = service.retrieveFxtrsUseList(paging);
		model.addAttribute("fxtrsUseList",fxtrsUseList);
		
		PaginationRenderer renderer = new BootstrapFormBasePaginationRenderer("#searchForm");
		String pagingHTML = renderer.renderPagination(paging);
		model.addAttribute("pagingHTML",pagingHTML);
		
		return "emp/pms/fxtrs/useList";
	}
	
	@GetMapping("useListadd.do")
	public String fxtrsUseadd() {
		return "emp/pms/fxtrs/useListadd";
	}
}
